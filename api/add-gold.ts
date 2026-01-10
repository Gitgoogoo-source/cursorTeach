// import { createClient } from '@supabase/supabase-js';

// // 1. 初始化 Supabase 客户端
// // 这些变量我们等下会在 Vercel 面板里配置，不在代码里写死
// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// const supabase = createClient(supabaseUrl, supabaseServiceKey);

// export default async function handler(req: any, res: any) {
//     // 2. 只允许 POST 请求（为了安全）
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method not allowed' });
//     }

//     // 3. 解析 Cocos 发过来的数据
//     const { userId, amount } = req.body;

//     if (!userId) {
//         return res.status(400).json({ error: 'Missing userId' });
//     }

//     try {
//         // 4. 在数据库中执行“原子操作”：增加金币
//         // rpc 是调用 Supabase 的存储过程（或者直接用 update 逻辑）
//         // 这里我们先用最通俗的：先查出多少钱，再加上去
        
//         // 逻辑：尝试更新用户的金币，如果用户不存在，则创建他（upsert）
//         const { data, error } = await supabase
//             .from('user_profiles')
//             .select('gold_balance')
//             .eq('user_id', userId)
//             .single();

//         let currentGold = 0;
//         if (data) {
//             currentGold = data.gold_balance;
//         }

//         const { error: upsertError } = await supabase
//             .from('user_profiles')
//             .upsert({ 
//                 user_id: userId, 
//                 gold_balance: currentGold + (amount || 100),
//                 updated_at: new Date()
//             });

//         if (upsertError) throw upsertError;

//         // 5. 返回成功信息给 Cocos
//         return res.status(200).json({ 
//             success: true, 
//             newBalance: currentGold + (amount || 100) 
//         });

//     } catch (error: any) {
//         console.error('Database Error:', error);
//         return res.status(500).json({ error: error.message });
//     }
// }


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: any, res: any) {
    // --- 【新增：解决跨域问题的通行证】 ---
    // 1. 允许任何域名访问（'*' 代表所有来源）
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 2. 允许的请求方式（我们用的是 POST）
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    // 3. 允许的请求头（我们在 Cocos 里设置了 Content-Type）
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 4. 处理浏览器的“预检”请求
    // 浏览器在真正发送 POST 之前，有时会先发一个 OPTIONS 请求问问行不行
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    // --- 【通行证设置结束】 ---

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { userId, amount } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        const { data } = await supabase
            .from('user_profiles')
            .select('gold_balance')
            .eq('user_id', userId)
            .single();

        let currentGold = data ? data.gold_balance : 0;

        const { error: upsertError } = await supabase
            .from('user_profiles')
            .upsert({ 
                user_id: userId, 
                gold_balance: currentGold + (amount || 100),
                updated_at: new Date()
            });

        if (upsertError) throw upsertError;

        return res.status(200).json({ 
            success: true, 
            newBalance: currentGold + (amount || 100) 
        });

    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "../../lib/supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { data } = await supabase.from("projects").select();

    return res.status(200).json(data);
};

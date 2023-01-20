const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function findAllBeanies(beanies) {
    let { data, error } = await client.from('beanie_babies').select('*').limit(100);

    if (beanies) {
        data = data.eq('title', beanies);
    }
    const response = await data;

    return response;
}

export async function findZodiac() {
    let { data, error } = await client.from('beanie_baby_astro_signs').select('*').limit(100);

    const response = await data;

    return response;
}

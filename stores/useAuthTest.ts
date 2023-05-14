const supabase = useSupabase()
export const useAuthTest = defineStore('auth',{
state: ()=>({
currentUser: [] as any,
allPosts: [] as any,
}),
actions:{
    async loginEmail() {
        try{
            const res = await supabase.auth.signInWithPassword({
                email: 'cyprianwaclaw@gmail.com',
                password: 'test123456',
            })
              this.currentUser = res.data
        //    await useRouter().push('/')
            //  window.location.reload();           
        } catch (e){
            console.error(e)
        }
        },
        async getAllPosts() {
            try {
                const res = await supabase
                    .from('posts')
                    .select('*')
                this.allPosts = res.data
            } catch (err) {
                console.error("Error retrieving data from db", err);
            }
        },
}
})
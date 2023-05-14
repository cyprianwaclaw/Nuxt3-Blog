const useAuth = () => {
    const user = useState("user", () => null) as any | null
    const supabase = useSupabase()

supabase.auth.onAuthStateChange((e, session)=>{
user.value = session?.user || null
})

    const signUp = async ({email, password}: {email:any, password:any}) => {
        const{data:user} = await supabase.auth.signInWithPassword({
            email, password
        })
        return user
    }
    return {
        user,
        signUp
    }
}

export default useAuth
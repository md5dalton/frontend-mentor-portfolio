export async function GET(req) {
    // const formData = await req.formData()
    // const name = formData.get('name')
    // const email = formData.get('email')
    // return Response.json({ name, email })
    const message = `mds@gmail.com says hello`
    // console.log(`https://api.telegram.org/${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHANNEL}&text=${message}`)
    try {
        
        const request = await fetch(`https://api.telegram.org/${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHANNEL}&text=${message}`,{
            method: "GET",
            redirect: "follow"
        })

        const response = await request.json()

        console.log(response)

    } catch (error) {
        
        console.log("Error", error.message)

    }

    return Response.json({msg: message})
}
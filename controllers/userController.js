
let users =[]


const getUsers=(req,res)=>{
    res.status(200).json({
        success: true,
        data: users
    })

}

const createUsers = (req, res) => {
    const {name,email} = req.body;
    const newUser = {
        id: users.length+1,
        name,
        email
    }
    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
         data: newUser
    });
};
module.exports={getUsers,createUsers};
let users = [];

const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
};

const createUsers = (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: newUser
    });
};

const add = (req,res)=>{
    const{A,B}=req.body;
    if(!A || !B){
        res.status(404).json({
            success:false,
            message:"Data Not Found"
        });
    }
    res.status(200).json({
        success: true,
        message:"Added Succesfully" ,
        data: A + B
    });
    
}

const updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json({
        success: true,
        message: "User Updated Successfully",
        data: user
    });
};

module.exports = { getUsers, createUsers,add,updateUsers};
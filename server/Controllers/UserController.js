import UserModel from "../Models/UserModels.js";
import bcrypt from "bcrypt";
//GET ПОЛЬЛЬЗОВАТЕЛЬ

export const getUser = async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if(user)
        {
            const {password,...otherDetails}=user._doc

            res.status(200).json(otherDetails)
        }
        else
        {
            res.status(404).json('Такого пользователя не существует')
        }
    } catch (error) {
        res.status(500).json(error)
    }
} 
//update a user
export const  updateUser = async(req,res)=>{
    const id =req.params.id
    const {currentUserId,currentUserAdminStatus,password}=req.body

    if(id===currentUserId || currentUserAdminStatus)
    {
        try {
            if(password)
            {
                const salt = await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt);
            }


            const user = await UserModel.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    else
    {
        res.status(403).json("В доступе отказано! Вы можете обновить только свой профиль")
    }
}

//Удаление Пользователя
export const deleteUser = async(req,res)=>{
    const id =req.params.id

    const {currentUserId,currentUserAdminStatus}=req.body

    if(currentUserId===id||currentUserAdminStatus)
    {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("Пользователь удален успешно")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("В доступе отказано! Вы можете удалить только свой профиль")
    }
}

// Follow a User
export const followUserF = async(req,res)=>{
    const id = req.params.id

    const {currentUserId} =req.body

    if(currentUserId===id)
    {
        res.status(403).json("Действие запрещено")
    }
    else{
        try {
            const followUserF= await UserModel.findById(id);
            const followingUserF= await  UserModel.findById(currentUserId);

            if(!followUserF.followersf.includes(currentUserId))
            {
                await followUserF.updateOne({$push:{followersf:currentUserId}}) 
                await followingUserF.updateOne({$push:{followingf:id}})
                res.status(200).json("Пользователь подписался")
            }
            else{
                res.status(403).json("Пользователь уже подписан на вас")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

// UnFollow a User
export const UnfollowUserF = async(req,res)=>{
    const id = req.params.id

    const {currentUserId} =req.body

    if(currentUserId===id)
    {
        res.status(403).json("Действие запрещено")
    }
    else{
        try {
            const followUserF= await UserModel.findById(id);
            const followingUserF= await  UserModel.findById(currentUserId);

            if(followUserF.followersf.includes(currentUserId))
            {
                await followUserF.updateOne({$pull:{followersf:currentUserId}}) 
                await followingUserF.updateOne({$pull:{followingf:id}})
                res.status(200).json("Пользователь одписался")
            }
            else{
                res.status(403).json("Пользователь уже подписан на вас")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}


import user from '../model/Users';
class User {
  async addUser(req, res){
    let { name, email, password } = req.body;
    user.findAll({ where : {
      email
    }}).then((result) => {
        if(result[0]){
          res.status(404).send({
            status: 404,
            data: {
              message: "User Alread Exist."
            }
          })
        } else {
          user.create({
            name,
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date()
          }).then((out) => {
            res.status(201).send({
              status: 201,
              data: out
            })
          }).catch((err) => res.send({
            status: res.status,
            error: err
          }));
        }
    })
  }
  async getAllUses(req, res){
    user.findAll().then((users) => {
      if(users.lenght <= 0){
          res.status(404).send({
            status: 404,
            data: {
                message: "User not found!"
            } 
          })
      }
      res.status(200).send({
        status: 200,
        data: users
      })
    })
    .catch((err) => console.log(err))
  }
}
export default new User();
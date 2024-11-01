const user = require("../models/user");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;

      const userCreated = await user.create({ nome, email, idade });

      return res.status(201).json({
        msg: "Usuário criado com sucesso!",
        user: userCreated,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;

      const userFinded = await user.findById(id);
      if (!userFinded) {
        return res.status(404).json({
          msg: "Usuário não encontrado.",
        });
      }

      await user.findByIdAndUpdate(id, {
        nome,
        email,
        idade,
      });
      return res.status(200).json({
        msg: "Usuário atualizado com sucesso!",
      });
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await user.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Usuário deletado com sucesso",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await user.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const userFinded = await user.findById(id);
      if (!userFinded) {
        return res.status(404).json({
          msg: "Usuário não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Usuário encontrado!",
        userFinded
      });
    } catch (error) {
        console.log(error);
        
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
};
module.exports = UserController;

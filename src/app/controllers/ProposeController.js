import * as Yup from 'yup'; // usa "* as" pq o yup não tem um export
import Propose from '../models/Propose';

class ProposeController {
  async index(req, res) {
    const proposes = await Propose.findAll({
      where: { user_id: req.userId },
      order: ['create_at'],
      atributtes: ['id', 'propose_description']
      include:  [
        {
        model: Imovel,
        as: imovel,
        atributtes: ['id', 'address'],
         },
       ],
    });
    
    return res.json(proposes);
  
  }
  
  async store(req, res) {
    const schema = Yup.object().shape({
      imovel_id: Yup.number().required(),
      phone: Yup.number().required(),
      date: Yup.date().required(),
      propose_description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { phone, imovel_id, propose_description } = req.body;

    // Vai criar a Proposta
    const propose = await Propose.create({
      user_id: req.userId,
      phone,
      imovel_id,
      propose_description,
    });

    return res.json(propose);
  }
}

export default new ProposeController();

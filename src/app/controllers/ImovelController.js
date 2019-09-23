import * as Yup from 'yup'; // usa "* as" pq o yup não tem um export
import Imovel from '../models/Imovel';

class ImovelController {
  async store(req, res) {
    const schema = Yup.object().shape({
      address: Yup.string().required(),
      area: Yup.number().required(),
      price: Yup.number().required(),
      rooms: Yup.number().required(),
      bathrooms: Yup.number().required(),
      description: Yup.string().required(),
    });

    // Ver se o req.body esta passando igual ao schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const imovelExists = await Imovel.findOne({
      where: { address: req.body.address },
    });

    if (imovelExists) {
      return res.status(400).json({ error: 'Imovel alredy exists.' });
    }

    // cria o usuário e guarda apenas id, adress e email para retornar ao frontend
    const { address, price, description } = await Imovel.create(req.body);

    // Retorna um Objeto com essa Info
    return res.json({
      address,
      price,
      description,
    });
  }

  async index(req, res) {
    const imovel = await Imovel.findAll();

    return res.json(imovel);
  }
}

export default new ImovelController();

import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req, res) => { // request para lo que enviamos, response lo que express nos responde
    
    // Consultar 3 viajes del modelo Viaje

    try {
        const viajes = await Viaje.findAll({ limit: 3 });
        const testimoniales = await Testimonial.findAll({ limit: 3 });

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros' , {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar DB
    const viajes = await Viaje.findAll();


    res.render('viajes' , {
        pagina: 'Próximos viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales' , {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(erro)
    }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const resultado = await Viaje.findOne({where : {slug}});

        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
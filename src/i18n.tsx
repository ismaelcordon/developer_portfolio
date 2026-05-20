import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                projects: "Projects",
                experience: "Experience",
                contact: "Contact",
                blog: "Blog",
            },
            home: {
                description:
                    "I build high-quality native Android and iOS applications, developing the backend as well to deliver true end-to-end solutions. I focus on clean, scalable code, on-time delivery, and products that get real results",
            },
            about: {
                marquee: {
                    architecture: "Architecture",
                    production: "Production",
                    scalability: "Scalability",
                },
                years_of_experience: "Years of experience",
                apps_developed: "Completed projects",
                apps_in_store: "Apps in store",
                description: `I’m a mobile developer with <1> over 5 years of experience</1> building native Android applications, consistently working across backend systems throughout my career. 
                    
                    My core expertise is <1>native mobile development</1>, and I’m currently expanding my work into iOS while focusing on freelance projects. 
                    
                    I design and build products <1> end-to-end</1> from database modeling and server setup to delivering production-ready mobile apps. I focus on <1>scalable architecture, clean code, and turning ideas into reliable, real-world applications.</1>`,
            },
            contact: {
                do_you_like_my_work: "Do you like my work?",
                your_name: "Your name",
                name: "Name",
                your_email: "Your email",
                email: "Email",
                your_message: "Your message",
                message: "Message",
                send_message: "Send message",
                feel_free_to_reach_out:
                    "Feel free to reach out, I'm always open to connect!",
                have_a_project_in_mind:
                    "Have a <1>project in mind</1>, or a <1>question</1>?",
                email_request: {
                    sending: "Sending email, please wait ...",
                    success: "Email successfully sent ✅",
                    error: "There was an error sending the email ❌",
                },
            },
            experience: {
                descriptions: {
                    appsoluciones:
                        "Employee tracking and company management project for multiple companies. Fully developed the solution: app design, database creation, REST API development, and iOS and Android app construction, taking the project from initial concept to a functional product currently in the market.",
                    stradivarius:
                        "Development of the official Stradivarius app for Android developed in Kotlin, leading the migration of the interface from XML to Jetpack Compose and the incorporation of new features.",
                    astrata:
                        "Development of mobile applications for the transport and logistics sector, in React Native and native Android, taking part in defining the architecture, creating new apps from scratch, and improving existing solutions, along with the associated backend.",
                    hasten: "Android native application development for bus ticket sales, integrated with the Redsys payment platform.",
                    icp: "Development of mobile applications for the transport and logistics sector, focused on truck drivers and supported by device features such as Google Maps, camera, and location services, involving frontend and backend.",
                    serban: "Implementation of biometric solutions for mobile and web environments, including voice, signature, and recognition systems. Cross-functional work on frontend and backend, with a focus on the integration and robustness of Android solutions.",
                },
            },
            projects: {
                master_meme:
                    "Master Meme is an app that allows you to quickly and easily create memes from predefined templates. You can drag and edit the text freely, adjusting the size, font, and color to achieve the perfect result. Once you've created your meme, you can export it to your device's memory or share it directly from the app on your social media and messaging apps.",
                echo_journal:
                    "Echo Journal is an audio journaling app that allows you to easily record and save voice memos. Each recording can be associated with a mood and personalized tags, making it easy to organize and filter your audio files later. In addition, during recording, the app automatically generates a description using AI transcription, making it much easier to review and search for your reflections.",
                note_mark:
                    "NoteMark is a offline-first note-taking app designed to work completely offline. All your notes are stored locally, and you decide when they sync with the server: every 15 or 30 minutes, every hour, or manually. Each note has three different modes—view, edit, and read mode—that offer different ways to read and work with content, adapting to both writing and reading without distractions.",
                lazy_pizza:
                    "LazyPizza is an app for ordering pizza delivery quickly and easily. It displays a catalog of pizzas and toppings, along with a preferences section to customize delivery times. The app can be used as a guest or by logging in via SMS, allowing you to save an order history that can be viewed at any time.",
            },
            download_resume: "Resume",
            greeting: "Hi I'm",
            blog: {
                intro: `<1>Hi! Welcome to my tiny space on the web.</1>

From Monday to Friday, you’ll find me developing apps for iOS and Android—that’s what I do for a living. But I’m not settle for just front end: <1>I'm passionate about backend so I can build complete, real-world, and robust apps from scratch.</1>

That’s where my passion for self-hosting comes from. On this blog, you’ll see my adventures and misadventures setting up a home server, building APIs, configuring Nginx, wrestling with domains, and automating continuous deployments.

I firmly believe that learning is the best thing we can do every day. <1>By the way, in a web flooded with automated content, I promise you this blog is 100% human. No tricks, no gimmicks, and no AIs involved;</1> just me sharing my journey with you.`,
            },
        },
    },
    es: {
        translation: {
            nav: {
                home: "Inicio",
                about: "Acerca de",
                projects: "Proyectos",
                experience: "Experiencia",
                contact: "Contacto",
                blog: "Blog",
            },
            home: {
                description:
                    "Creo aplicaciones nativas de alta calidad para Android e iOS, desarrollando también el backend para ofrecer soluciones completas. Me centro en crear código limpio y escalable, cumplir con los plazos de entrega y crear productos que obtengan resultados reales.",
            },
            about: {
                marquee: {
                    architecture: "Arquitectura",
                    production: "Producción",
                    scalability: "Escalabilidad",
                },
                years_of_experience: "Años de experiencia",
                apps_developed: "Proyectos completados",
                apps_in_store: "Apps en la tienda",
                description: `Soy desarrollador móvil <1> con más de 5 años de experiencia</1> creando aplicaciones nativas para Android, trabajando consistentemente en sistemas backend durante toda mi carrera.

                    Mi especialidad principal es <1>desarrollo móvil nativo</1>, y actualmente estoy expandiendo mi trabajo hacia iOS mientras me enfoco en proyectos freelance.

                    Diseño y construyo productos <1>end-to-end</1> desde el modelado de base de datos y la configuración del servidor hasta la entrega de aplicaciones móviles listas para producción. Me enfoco en <1>arquitectura escalable, código limpio y transformar ideas en aplicaciones confiables del mundo real.</1>`,
            },
            contact: {
                do_you_like_my_work: "¿Te ha gustado mi trabajo?",
                your_name: "Tu nombre",
                name: "Nombre",
                your_email: "Tu correo",
                email: "Correo",
                your_message: "Tu mensaje",
                message: "Mensaje",
                send_message: "Enviar mensaje",
                feel_free_to_reach_out:
                    "No dudes en ponerte en contacto conmigo, ¡siempre estoy dispuesto a conectar!",
                have_a_project_in_mind:
                    "Tienes un <1>proyecto en mente</1>, o alguna <1>pregunta</1>?",
                email_request: {
                    sending: "Enviando email, espere ...",
                    success: "Email enviado correctamente",
                    error: "Ha habido un error enviando el email",
                },
            },
            experience: {
                descriptions: {
                    appsoluciones:
                        "Proyecto de fichaje y gestión de empleados para distintas empresas. Solución end-to-end: diseño de la aplicación, creación de la base de datos, implementación de la REST API y construcción de las apps iOS y Android, llevando el proyecto desde la idea inicial hasta un producto en producción.",
                    stradivarius:
                        "Evolución de la aplicación oficial de Stradivarius para Android en producción, desarrollada en Kotlin, liderando la migración de la interfaz de XML a Jetpack Compose y la incorporación de nuevas funcionalidades.",
                    astrata:
                        "Desarrollo de aplicaciones móviles para el sector transporte y logística, en React Native y Android nativo, participando en la definición de la arquitectura, la creación desde cero de nuevas apps y la mejora de soluciones existentes, junto con el backend asociado.",
                    hasten: "Desarrollo de una aplicación Android nativa para la venta de billetes de autobús, integrada con la plataforma de pago Redsys.",
                    icp: "Desarrollo de aplicaciones móviles Android para el sector transporte y logística, orientadas a camioneros y apoyadas en funcionalidades del dispositivo como Google Maps, cámara y servicios de localización, participando en frontend y backend.",
                    serban: "Implementación de soluciones biométricas para entornos móviles y web, incluyendo sistemas de voz, firma y reconocimiento. Trabajo transversal en frontend y backend, con foco en la integración y robustez de las soluciones Android.",
                },
            },
            projects: {
                master_meme:
                    "Master Meme es una app que te permite crear memes de forma rápida y sencilla a partir de plantillas predefinidas. Puedes arrastrar y editar el texto libremente, ajustando el tamaño, la tipografía y el color para conseguir el resultado perfecto. Una vez creado el meme, puedes exportarlo a la memoria de tu dispositivo o compartirlo directamente desde la app en tus redes y apps de mensajería.",
                echo_journal:
                    "Echo Journal es una app de journaling en formato de audio que te permite grabar y guardar notas de voz de forma sencilla. Cada grabación puede asociarse a un estado de ánimo (mood) y a etiquetas personalizadas, lo que facilita la organización y el filtrado posterior de los audios. Además, durante la grabación la app genera automáticamente una descripción gracias a la transcripción por IA, haciendo que revisar y buscar tus reflexiones sea mucho más cómodo.",
                note_mark:
                    "NoteMark es una aplicación de notas offline-first diseñada para funcionar completamente sin conexión a internet. Todas tus notas se guardan de forma local y tú decides cuándo se sincronizan con el servidor: cada 15 o 30 minutos, cada hora o de manera manual. Cada nota cuenta con tres modos diferenciados —vista, edición y read mode— que ofrecen distintas formas de leer y trabajar el contenido, adaptándose tanto a la escritura como a la lectura sin distracciones.",
                lazy_pizza:
                    "LazyPizza es una app para pedir pizzas a domicilio de forma rápida y sin complicaciones. Muestra un catálogo de pizzas y complementos, junto con una sección de preferencias para personalizar el momento de la entrega. La app puede usarse como invitado o mediante inicio de sesión por SMS, lo que permite guardar un histórico de pedidos que se puede consultar en cualquier momento.",
            },
            download_resume: "Curriculum",
            greeting: "Hola, soy",
            blog: {
                intro: `<1>¡Hola! Bienvenido/a a mi pequeño rincón.</1>

De lunes a viernes me vas a encontrar desarrollando apps para iOS y Android, que es a lo que me dedico. Pero a mí no me basta con la fachada: <1>me flipa el backend para poder construir apps completas, reales y robustas desde cero</1>.

De ahí nace mi pasión por el self-hosting. En este blog verás mis aventuras y desventuras montando un servidor casero, construyendo APIs, configurando Nginx, peleándome con dominios y automatizando despliegues continuos.

Creo firmemente que aprender es lo mejor que podemos hacer cada día. <1>Por cierto, en una red inundada de contenido automático, te prometo que este blog es 100% humano. Sin trampa, sin cartón y sin IAs de por medio; solo yo compartiendo mi viaje contigo.</1>`,
            },
        },
    },
};

export default i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

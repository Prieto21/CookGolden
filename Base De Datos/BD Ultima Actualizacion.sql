/*
SQLyog Community v8.71 
MySQL - 5.5.5-10.4.6-MariaDB : Database - cookgolden
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cookgolden` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `cookgolden`;

/*Table structure for table `bebida` */

DROP TABLE IF EXISTS `bebida`;

CREATE TABLE `bebida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `bebida` */

insert  into `bebida`(`id`,`nombre`) values (1,'Bebidas');

/*Table structure for table `bienvenida` */

DROP TABLE IF EXISTS `bienvenida`;

CREATE TABLE `bienvenida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `bienvenida` */

insert  into `bienvenida`(`id`,`mensaje`) values (3,'Bienvenido A Cook Golden');

/*Table structure for table `botones` */

DROP TABLE IF EXISTS `botones`;

CREATE TABLE `botones` (
  `id_botones` int(11) NOT NULL AUTO_INCREMENT,
  `id_color` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_botones`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `botones` */

insert  into `botones`(`id_botones`,`id_color`) values (4,1);

/*Table structure for table `carrusel` */

DROP TABLE IF EXISTS `carrusel`;

CREATE TABLE `carrusel` (
  `id_carrusel` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_carrusel`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `carrusel` */

insert  into `carrusel`(`id_carrusel`,`img`) values (1,'redes.png');

/*Table structure for table `clases` */

DROP TABLE IF EXISTS `clases`;

CREATE TABLE `clases` (
  `id_clases` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext DEFAULT NULL,
  PRIMARY KEY (`id_clases`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `clases` */

insert  into `clases`(`id_clases`,`link`) values (3,'https://www.youtube.com/embed/yNMoWwNe2DE'),(4,'https://www.youtube.com/embed/eXBrn5wvl4A'),(8,'https://www.youtube.com/embed/Tbuy1iSeieA'),(9,'https://www.youtube.com/embed/oJMGeyRE62Y'),(10,'https://www.youtube.com/embed/tT4Bblam5lg'),(11,'https://www.youtube.com/embed/aItvSdSBz2U'),(12,'https://www.youtube.com/embed/E78n-l6SnJY');

/*Table structure for table `clasificacion` */

DROP TABLE IF EXISTS `clasificacion`;

CREATE TABLE `clasificacion` (
  `id_clasif` int(11) NOT NULL AUTO_INCREMENT,
  `clasificacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_clasif`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `clasificacion` */

insert  into `clasificacion`(`id_clasif`,`clasificacion`) values (1,'Comidas'),(2,'Bebidas'),(3,'Postres');

/*Table structure for table `colores` */

DROP TABLE IF EXISTS `colores`;

CREATE TABLE `colores` (
  `id_colores` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_colores`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `colores` */

insert  into `colores`(`id_colores`,`color`) values (1,'warning'),(2,'info'),(3,'danger'),(4,'primary');

/*Table structure for table `comentarios` */

DROP TABLE IF EXISTS `comentarios`;

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` longtext DEFAULT NULL,
  `id_usuario` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `comentarios` */

insert  into `comentarios`(`id_comentario`,`comentario`,`id_usuario`) values (1,'Buen Servicio',4),(3,'Excelente pagina',5),(4,'Me gusta mucho la facilidad de encontrar lo que quiero',6),(5,'Lo mejor de lo mejor',7);

/*Table structure for table `comida` */

DROP TABLE IF EXISTS `comida`;

CREATE TABLE `comida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `comida` */

insert  into `comida`(`id`,`nombre`) values (1,'Comidas');

/*Table structure for table `favoritos` */

DROP TABLE IF EXISTS `favoritos`;

CREATE TABLE `favoritos` (
  `id_favorito` int(11) NOT NULL AUTO_INCREMENT,
  `id_receta` int(100) DEFAULT NULL,
  `id_usuario` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_favorito`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `favoritos` */

insert  into `favoritos`(`id_favorito`,`id_receta`,`id_usuario`) values (2,1,4),(4,11,4),(5,15,4);

/*Table structure for table `fondo` */

DROP TABLE IF EXISTS `fondo`;

CREATE TABLE `fondo` (
  `id_fondo` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_fondo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `fondo` */

insert  into `fondo`(`id_fondo`,`img`) values (2,'fondo.jpg');

/*Table structure for table `mision` */

DROP TABLE IF EXISTS `mision`;

CREATE TABLE `mision` (
  `id_mision` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` longtext DEFAULT NULL,
  PRIMARY KEY (`id_mision`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `mision` */

insert  into `mision`(`id_mision`,`mensaje`) values (1,'Somos una empresa cuya misión es ofrecer productos de panadería, repostería, cafetería y refrigerios en general de la más alta calidad con un excelente sabor y aun precio accesible.'),(2,'Establecer un liderazgo con la colaboración y creatividad de nuestro talento  humano, utilizando las mejores materias primas del mercado para satisfacer a nuestros clientes.\r\n');

/*Table structure for table `namefavoritos` */

DROP TABLE IF EXISTS `namefavoritos`;

CREATE TABLE `namefavoritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `namefavoritos` */

insert  into `namefavoritos`(`id`,`nombre`) values (1,'Favoritos');

/*Table structure for table `nameperfil` */

DROP TABLE IF EXISTS `nameperfil`;

CREATE TABLE `nameperfil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `nameperfil` */

insert  into `nameperfil`(`id`,`nombre`) values (1,'Perfil');

/*Table structure for table `nombre` */

DROP TABLE IF EXISTS `nombre`;

CREATE TABLE `nombre` (
  `id_nombre` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `nombre` */

insert  into `nombre`(`id_nombre`,`nombre`) values (2,'COOK GOLDEN');

/*Table structure for table `postre` */

DROP TABLE IF EXISTS `postre`;

CREATE TABLE `postre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `postre` */

insert  into `postre`(`id`,`nombre`) values (1,'Postres');

/*Table structure for table `receta` */

DROP TABLE IF EXISTS `receta`;

CREATE TABLE `receta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `receta` */

insert  into `receta`(`id`,`nombre`) values (2,'Recetas');

/*Table structure for table `recetas` */

DROP TABLE IF EXISTS `recetas`;

CREATE TABLE `recetas` (
  `id_receta` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` longtext DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `id_clasif` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_receta`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

/*Data for the table `recetas` */

insert  into `recetas`(`id_receta`,`nombre`,`descripcion`,`img`,`id_clasif`) values (1,'Tortas ahogadas de Guadalajara','Una de las recetas más tradicionales de Jalisco es la famosa torta ahogada, elaborada con birote de Guadalajara, rellena de trozos de carne frita de puerco (carnitas) y bañada en una salsa de jitomate condimentada y una salsa de chile de árbol picante. Muy difícilmente se puede encontrar en otros lugares del país.','comida.jpg',1),(2,'Atole de pinole','El pinole es una preparación prehispánica que proviene de la palabra náhuatl \"pinolli\", que significa harina de maíz- Es un polvo fino de maíz tostado que se comía desde la época prehispánica y que ha conservado su uso en la actualidad; también sirve para la preparación de postres o bien para consumirse con queso.','bebida.jpg',2),(3,'Tarta de melocotón en almíbar','Uno de los platos más conocidos en el mundo es el que se elabora con una tartaleta, es decir, una base de masa cocida que tiene forma de plato o recipiente. Se puede utilizar en preparaciones saladas o dulces, aunque en postres suele ser más popular. La tartaleta se hace con una pasta que es, a pesar de ser firme, algo frágil, por eso muchas personas no se sienten a gusto con ella.','postre1.jpg',3),(5,'Chanfaina extremeña','Este rico plato típico de Extremadura, concretamente de Fuente de Cantos, tiene una humilde y rápida preparación, con un resultado final único y antiguo. De hecho, siguen preparando esta receta en sus festejos como gran tradición de la Chanfaina, como cuando nuestros antepasados hacían estas preparaciones con dedicación y mucho cariño.','comida1.jpg',1),(6,'Poc Chuc','Alrededor de todas las regiones de México se pueden encontrar una gran variedad de platillos típicos, pero una de las regiones más rica es en cuanto a gastronomía es la de Yucatán. Este estado posee muchos platillos tradicionales y deliciosos, siendo uno de los más populares el llamado poc chuc.','comida2.jpg',1),(7,'San Jacobos caseros','Vamos a preparar San Jacobos, un plato muy sencillo que va a gustar mucho a toda la familia, ya que la combinación de jamón york y queso es deliciosa. Los san Jacobos caseros, o sanjacobos, se componen de dos lonchas de jamón y una loncha de queso fácil de fundir. Se comercializan ya preparados, pero hacerlos en casa siempre es mucho más recomendable porque nos aseguramos de utilizar ingredientes de calidad.','comida3.jpg',1),(8,'Chifrijo','El chifrijo es un platillo costarricense creado en los años noventa. Su origen se da en los bares y cantinas de la capital San José de Costa Rica, mientras que su nombre proviene de la combinación de sus principales ingredientes: chicharrones y frijoles. Este plato tradicional es un producto del mestizaje de los productos originarios de la América Central con los traídos por los europeos.','comida4.jpg',1),(9,'cordero en salsa','Las mollejas de cordero, con su suave y característico sabor, son una de las joyas de la cocina. Son muy versátiles al cocinar, pues se pueden preparar de muchas formas y acompañarlas con un sinfín de guarniciones. En este caso, en RecetasGratis te compartimos esta receta de mollejas de cordero en salsa. Podrás servirlas como acompañante de otros platos o como comida principal.','comida5.jpg',1),(10,'horchata con fresa','El agua de horchata tiene su origen en el Mediterráneo. Como ingrediente principal en sus inicios se encontraba la cebada, la almendra y la pepita de melón, pero con el paso de los años y la introducción de esta a varios países, los ingredientes originales fueron sustituidos, dejando una variación de sabores y colores.','bebida1.jpg',2),(11,'Agua de Jamaica con canela y jengibre','El agua de flor de Jamaica es una de las más consumidas en México. Ha sido la bebida favorita de muchos y no solo por su sabor, sino también por sus beneficios. Imagina combinar estos beneficios con los del jengibre y la canela, tendremos una poderosa bebida que nos ayudará en nuestro día a día.','bebida2.jpg',2),(12,'Agua de tamarindo','El tamarindo es un fruto muy rico proveniente de un árbol tropical que también trae consigo bastantes beneficios para el organismo. Por ello, el uso del tamarindo en la gastronomía cada vez es más diverso y se ha vuelto un elemento fundamental en muchas recetas, entre ellas las bebidas.','bebida3.jpg',2),(13,'Café affogato','Affogato es una palabra italiana que significa sumergido o ahogado. Además del café espresso, la receta de affogato se prepara con una o dos bolas de helado que suele ser de vainilla, de nata u otros sabores. En cualquier caso, el helado debe ser cremoso y no debe ser de frutas o de hielo, pues no contrastan bien con el café caliente.','bebida4.jpg',2),(14,'Jugos para limpiar el hígado graso','El hígado graso es una dolencia que proviene de una alimentación inadecuada y malos hábitos de vida, que produce menudo dolor abdominal difuso, fatiga crónica, sensación de pesadez después de comer, vómito o diarrea. También puede aparecer problemas genéticos, aunque las causas anteriores son las más habituales.','bebida5.jpg',2),(15,'Torta fría de galleta María casera','La torta fría con base de galletas es una torta bastante popular en el mundo entero. De hecho, hay varias versiones europeas, latinoamericanas y hasta asiáticas. Una de estas versiones utiliza la popular galleta María por tres razones fundamentales: son galletas grandes, son económicas y su sabor es bastante neutro, por lo que combina bien con cualquier crema.','postre.jpg',3),(16,'Natillas caseras sin maicena','Aunque es cierto que las natillas espesan más cuando llevan maicena, es posible hacer natillas caseras sin maicena y el sabor es exactamente igual lleve o no lleve harina. Eso sí, hay que hacerlas con mimo y a fuego lento, ya que es una receta clásica, de esas que hacían nuestras abuelas con todo el cariño y la paciencia de las cocciones lentas.','postre2.jpg',3),(17,'Gaznates','El gaznate es un dulce de forma cilíndrica que se elabora con una pasta de trigo rellena de merengue. Es muy popular en México, especialmente en la zona central del país, pues quién no recuerda a los merengueros por las calles de México con su charola llena de estos riquísimos dulces.','postre3.jpg',3),(18,'Arroz con leche','El arroz con leche es un postre tradicional con gran aceptación, sobre todo si es casero. El problema de este postre es que lleva mucho tiempo de cocción y hay que trabajarlo con mucho mimo. Al hacer este delicioso postre en el microondas, nos vamos a ahorrar tiempo y el resultado es bastante bueno, con un sabor muy parecido al tradicional.','postre4.jpg',3),(19,'Flan de leche condensada sin horno','Si hay un postre que destaca por encima del resto por ser popular en casi todas las gastronomías del mundo ese es el flan. Este dulce se suele preparar con huevo y cocinar al horno, sin embargo, hoy en día hay muchas formas de prepararlo sin alterar su sabor. Por ello, en RecetasGratis mostramos una sencilla.','postre5.jpg',3);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id_rol`,`rol`) values (1,'Admin'),(2,'User');

/*Table structure for table `servicios` */

DROP TABLE IF EXISTS `servicios`;

CREATE TABLE `servicios` (
  `id_servicio` int(11) NOT NULL AUTO_INCREMENT,
  `id_chat` int(100) DEFAULT NULL,
  `chat` longtext DEFAULT NULL,
  `id_usuario` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_servicio`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `servicios` */

insert  into `servicios`(`id_servicio`,`id_chat`,`chat`,`id_usuario`) values (4,1,'Hola\r\n',2),(5,1,'Hola, Buenos días ',1),(6,1,'En que te podemos ayudar',1),(7,1,'No en nada, me tengo que ir',2),(8,1,'vale',1);

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `contra` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `id_rol` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usuario`,`nombre`,`apellido`,`usuario`,`contra`,`img`,`id_rol`) values (1,'Sergio Alejandro','Prieto Molano','Prieto21','1234','perfil.jpg',1),(2,'Mariana','Cortes','Mariana154','1234','mujer.jpg',2),(4,'PERSONAJE DE','PRUEBA','Prueba2345','123456','perfilprueba.jpg',2),(5,'Melissa','Diaz','meli498','12345','mujer1.jpg',2),(6,'Carlos ','castillo','carlos456','1234','hombre1.jpg',2),(7,'Mafe','Herrera','Mafe154','1234','mujer2.jpg',2);

/*Table structure for table `vision` */

DROP TABLE IF EXISTS `vision`;

CREATE TABLE `vision` (
  `id_vision` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` longtext DEFAULT NULL,
  PRIMARY KEY (`id_vision`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `vision` */

insert  into `vision`(`id_vision`,`mensaje`) values (1,'Ser una empresa líder en el negocio de  panadería y repostería reconocida en la zona norte del país. Destacarnos por la calidad y sabor de nuestros productos, atención y servicio al cliente.\r\n'),(4,'Utilizando los más altos estándares de calidad y tecnología de vanguardia en nuestros procesos productivos.');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

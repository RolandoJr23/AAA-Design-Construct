import { StaticImageData } from "next/image";

import customizedcabinetThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import ceilingpartitionThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import paintThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import repaintThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import renovationThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import finishingThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import gateThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import tilesThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import laminatedThumbnail from "../assets/images/686400886_122168907770937303_490107985428863713_n.jpg";

import customizedcabinet1 from "../assets/images/services/customizedcabinet/488911419_1254497633346325_3071550078124301012_n.jpg";
import customizedcabinet2 from "../assets/images/services/customizedcabinet/491899130_1263975715731850_8285816921360880310_n.jpg";
import customizedcabinet3 from "../assets/images/services/customizedcabinet/493490393_1275587907903964_4246093865723512066_n.jpg";
import customizedcabinet4 from "../assets/images/services/customizedcabinet/493730284_1274753604654061_5415091744249797892_n.jpg";
import customizedcabinet5 from "../assets/images/services/customizedcabinet/494027073_1275863847876370_7187194064531112469_n.jpg";
import customizedcabinet6 from "../assets/images/services/customizedcabinet/494627323_1278901544239267_6859839546312583835_n.jpg";

import ceilingpartition1 from "../assets/images/services/ceilingpartition/123658287_419314099462704_5536764401269187625_n.jpg";
import ceilingpartition2 from "../assets/images/services/ceilingpartition/161814907_513225340071579_9155097215043406863_n.jpg";
import ceilingpartition3 from "../assets/images/services/ceilingpartition/494171714_1278901460905942_5874458308144654842_n.jpg";
import ceilingpartition4 from "../assets/images/services/ceilingpartition/494543019_1278901517572603_1971021140276626252_n.jpg";
import ceilingpartition5 from "../assets/images/services/ceilingpartition/494558554_1278901550905933_2657499253272414176_n.jpg";

import paint1 from "../assets/images/services/paint/472866607_1561220331938736_7662417423455158074_n.jpg";
import paint2 from "../assets/images/services/paint/472900490_1561220205272082_1130783772770293209_n.jpg";
import paint3 from "../assets/images/services/paint/472918934_1561220148605421_4744846402251444116_n.jpg";
import paint4 from "../assets/images/services/paint/472920178_1561220215272081_805637635248799447_n.jpg";

import repaint1 from "../assets/images/services/repaint/75354916_159115532149230_5861628996004872192_n.jpg";
import repaint2 from "../assets/images/services/repaint/78186200_159115218815928_1683295097455640576_n.jpg";
import repaint3 from "../assets/images/services/repaint/472826127_1561202471940522_7486827767101137268_n.jpg";
import repaint4 from "../assets/images/services/repaint/472989245_1561202258607210_2287885766340813151_n.jpg";

import renovation1 from "../assets/images/services/renovation/473415542_1567145668012869_5637359439268864722_n.jpg";
import renovation2 from "../assets/images/services/renovation/473614464_1569999304394172_4233918792852849343_n.jpg";
import renovation3 from "../assets/images/services/renovation/480208502_1209438897852199_5992664668866304066_n.jpg";
import renovation4 from "../assets/images/services/renovation/480235235_1209438744518881_6513165291788969993_n.jpg";
import renovation5 from "../assets/images/services/renovation/481993539_1227699472692808_2175153382916097520_n.jpg";
import renovation6 from "../assets/images/services/renovation/482302490_1226838702778885_4100273866937228739_n.jpg";
import renovation7 from "../assets/images/services/renovation/483922019_1233414948787927_6452475585439926373_n.jpg";
import renovation8 from "../assets/images/services/renovation/484521042_1232914512171304_7697857524763312495_n.jpg";
import renovation9 from "../assets/images/services/renovation/484904067_1232914322171323_6879927059918159891_n.jpg";
import renovation10 from "../assets/images/services/renovation/489054494_1253571760105579_212563739824658402_n.jpg";

import finishing1 from "../assets/images/services/finishing/472340346_1561027788624657_2505574736310010054_n.jpg";
import finishing2 from "../assets/images/services/finishing/472405980_1561029891957780_5446388506210567723_n.jpg";
import finishing3 from "../assets/images/services/finishing/472473315_1561020261958743_3105645809160145593_n.jpg";

import gate1 from "../assets/images/services/gate/473566252_1569999684394134_7437362996382003881_n.jpg";
import gate2 from "../assets/images/services/gate/473583057_1569999667727469_1568452387101104690_n.jpg";

import tiles1 from "../assets/images/services/tiles/470017338_1542336970493739_8965119735546498326_n.jpg";
import tiles2 from "../assets/images/services/tiles/470209386_1542336983827071_6942190597820182587_n.jpg";

import laminated1 from "../assets/images/services/laminated/470219085_1542310547163048_4583269133393048363_n.jpg";
import laminated2 from "../assets/images/services/laminated/490120942_1261221452673943_3595755000929712871_n.jpg";
import laminated3 from "../assets/images/services/laminated/492885575_1273548978107857_6057389398871707422_n.jpg";

export interface ServicesDetails{
    id: string | number;
    title: string;
    description: string;
    overview: string;
    imagethumbnail: string | StaticImageData;
    imageProject?: string[] | StaticImageData[];
}

export const servicesdetails: ServicesDetails[] = [
    {
        id: 1,
        title: "Customized Cabinet",
        description: "Beautifully crafted, space-efficient cabinets tailored to your style, needs, and home interior, combining functionality with quality workmanship.",
        overview: "Our customized cabinet solutions are designed to meet the unique needs, preferences, and lifestyle of every client. We create functional, stylish, and space-efficient cabinetry that complements the overall interior design while maximizing storage and organization. From kitchen cabinets and wardrobes to entertainment units and office storage, each piece is carefully planned and crafted to suit the intended space and purpose. Using quality materials and skilled workmanship, we ensure that every cabinet combines durability, practicality, and aesthetic appeal. Our team works closely with clients throughout the design and installation process to deliver personalized solutions that reflect their vision, enhance daily living, and add long-term value to their homes or commercial spaces.",
        imagethumbnail: customizedcabinetThumbnail,
        imageProject: [customizedcabinet1, customizedcabinet2, customizedcabinet3, customizedcabinet4, customizedcabinet5, customizedcabinet6]
    },{
        id: 2,
        title: "Ceiling and Partition",
        description: "Expertly designed ceiling and partition solutions that enhance aesthetics, maximize space, and provide a durable, functional finish for any interior.",
        overview: "Our ceiling and partition services provide innovative solutions that enhance both the functionality and visual appeal of residential and commercial interiors. We design and install high-quality ceiling systems and partitions that help define spaces, improve organization, and create comfortable, modern environments tailored to each client's requirements. Whether for homes, offices, retail establishments, or renovation projects, we use durable materials and skilled craftsmanship to deliver clean, precise, and long-lasting results. From decorative ceilings to practical room dividers, our solutions are customized to maximize space efficiency while maintaining aesthetic harmony and structural integrity, ensuring every project meets the highest standards of quality and client satisfaction.",
        imagethumbnail: ceilingpartitionThumbnail,
        imageProject: [ceilingpartition1, ceilingpartition2, ceilingpartition3, ceilingpartition4, ceilingpartition5]
    },{
        id: 3,
        title: "Paint",
        description: "High-quality painting services that bring color, protection, and a refined finish to residential and commercial spaces.",
        overview: "Our painting services are dedicated to enhancing and protecting residential and commercial spaces through high-quality finishes and expert craftsmanship. We provide interior and exterior painting solutions that bring color, character, and a fresh appearance to every project while ensuring long-lasting durability and resistance to daily wear. Using premium materials and proper application techniques, our team delivers smooth, consistent, and professional results tailored to each client's preferences and design vision. From new construction projects to property improvements, we focus on precision, cleanliness, and attention to detail to create beautiful spaces that reflect quality, style, and lasting value.",
        imagethumbnail: paintThumbnail,
        imageProject: [paint1 , paint2, paint3, paint4]
    },{
        id: 4,
        title: "Re-Paint",
        description: "Professional repainting services that refresh, restore, and revitalize interiors and exteriors with a clean, long-lasting finish.",
        overview: "Our re-painting services are designed to restore, refresh, and revitalize residential and commercial properties with a renewed look and lasting protection. Whether updating faded colors, repairing worn surfaces, or giving a space a completely new appearance, we provide professional solutions that enhance both aesthetics and durability. With careful surface preparation, quality materials, and skilled application techniques, we ensure a smooth and flawless finish that meets the highest standards of workmanship. Our team works closely with clients to select the right colors and finishes, transforming existing spaces into clean, vibrant, and visually appealing environments that maintain their beauty for years to come.",
        imagethumbnail: repaintThumbnail,
        imageProject: [repaint1, repaint2, repaint3, repaint4]
    },{
        id: 5,
        title: "Renovation",
        description: "Comprehensive renovation services that transform existing spaces into modern, functional, and visually appealing environments tailored to your needs.",
        overview: "Our renovation services focus on transforming existing residential and commercial spaces into modern, functional, and visually appealing environments. Whether it involves upgrading interiors, improving layouts, restoring structures, or enhancing overall property value, we provide comprehensive solutions tailored to the unique needs and vision of every client. From planning and design to construction and finishing, our team ensures quality workmanship, attention to detail, and efficient project execution at every stage. By combining innovative ideas with durable materials and reliable construction practices, we create renewed spaces that offer greater comfort, functionality, and long-term value while maintaining the highest standards of excellence and customer satisfaction.",
        imagethumbnail: renovationThumbnail,
        imageProject: [renovation1, renovation2, renovation3, renovation4, renovation5, renovation6, renovation7, renovation8, renovation9, renovation10]
    },{
        id: 6,
        title: "Finishing",
        description: "Quality finishing works that add the perfect final touch, ensuring every detail reflects craftsmanship, durability, and a polished appearance.",
        overview: "Our finishing services are dedicated to adding the final details that bring every construction and renovation project to completion with elegance and precision. We focus on delivering high-quality workmanship that enhances the appearance, functionality, and overall value of residential and commercial spaces, ensuring a polished and professional result. From surface treatments and decorative elements to interior detailing and final installations, our team pays close attention to every aspect of the finishing process. Using quality materials and proven techniques, we create refined spaces that reflect durability, craftsmanship, and the client’s vision, leaving a lasting impression of excellence and attention to detail.",
        imagethumbnail: finishingThumbnail,
        imageProject: [finishing1, finishing2, finishing3]
    },{
        id: 7,
        title: "Gate",
        description: "Durable and stylish gate solutions designed to enhance security, functionality, and the overall appearance of your property.",
        overview: "Our gate solutions are designed to provide security, functionality, and aesthetic value for residential and commercial properties. We offer customized gate designs that complement the overall architecture while ensuring durability, safety, and ease of use. Whether for homes, businesses, or industrial spaces, our gates are built to meet the specific needs and preferences of each client. Using quality materials and skilled craftsmanship, we deliver gate installations that combine strength with modern and elegant designs. From simple entry gates to fully customized structures, our team focuses on precision, reliability, and long-lasting performance, creating solutions that enhance both the protection and visual appeal of every property.",
        imagethumbnail: gateThumbnail,
        imageProject: [gate1 , gate2]
    },{
        id: 8,
        title: "Tiles",
        description: "Professional tile installation services that combine durability, precision, and elegant designs to create beautiful and long-lasting spaces.",
        overview: "Our tile installation services deliver durable, elegant, and high-quality finishes for residential and commercial spaces. We specialize in the installation of floor and wall tiles that enhance the beauty, functionality, and value of any property. From modern designs to classic patterns, we provide solutions that complement the unique style and requirements of each project. With careful planning, precise workmanship, and the use of quality materials, our team ensures every tile is installed with accuracy and attention to detail. Whether for kitchens, bathrooms, living areas, outdoor spaces, or commercial establishments, we create long-lasting surfaces that combine aesthetic appeal, durability, and easy maintenance, resulting in spaces that are both practical and visually impressive.",
        imagethumbnail: tilesThumbnail,
        imageProject: [tiles1, tiles2]
    },{
        id: 9,
        title: "Laminated",
        description: "Premium laminated finishes that provide a sleek, durable, and low-maintenance solution for modern interiors and furniture.",
        overview: "Our laminated solutions provide modern, durable, and aesthetically pleasing finishes for a wide range of interior applications. We specialize in laminated surfaces for cabinets, furniture, wall panels, and other decorative elements, offering clients a practical option that combines style, strength, and easy maintenance. With a variety of colors, textures, and designs available, we create customized solutions that complement any interior concept. Using high-quality materials and expert craftsmanship, our team ensures precise installation and long-lasting performance in every project. Laminated finishes not only enhance the visual appeal of a space but also provide resistance to daily wear, moisture, and scratches, making them an ideal choice for both residential and commercial environments. Our commitment to quality and attention to detail guarantees results that are functional, elegant, and built to last.",
        imagethumbnail: laminatedThumbnail,
        imageProject: [laminated1, laminated2, laminated3]
    }

]
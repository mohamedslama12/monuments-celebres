// app/page.js

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h2>Bienvenue à la Tour Eiffel</h2>
     <center> <Image
        src="/images/tour-eiffel.jpg" // assure-toi d’avoir cette image dans /public/images
        alt="La Tour Eiffel"
        width={400}
        height={400}
  
        priority
      /></center>
      <p>
        Symbole emblématique de Paris, la Tour Eiffel attire des millions de visiteurs chaque année. 
        Construite pour l’exposition universelle de 1889, elle représente l’innovation, l’élégance et l’histoire.
      </p>
      <p>
        Découvrez son histoire, sa construction, et explorez une galerie unique à travers notre site.
      </p>
      <h2>Bienvenue  a la taj  mahal</h2>
        <center> <Image
         src="/images/taj-mahal.jpg" // assure-toi d’avoir cette image dans /public/images
        alt="taj- mahal"
        width={400}
        height={400}
        priority
      /></center>
      <p>Sa construction commence en 1632, mais la date exacte de la fin des travaux demeure incertaine. Selon le chroniqueur officiel de Shâh Jahân, Abdul Hamid Lahori (en), le Taj Mahal est achevé à la fin de 1643 ou au début de 1644[10]. Mais une inscription dans l'entrée principale indique que la construction s'est achevée en 1648. L'État de l'Uttar Pradesh, qui a célébré officiellement le 350e anniversaire de l'édifice en 2004, affirme quant à lui que les travaux se sont achevés en 1654. Le chercheur Andrew Petersen, lui, mentionne prudemment que « les travaux ont duré plus de vingt ans »[11].</p>
      <p>En 2019, le monument a attiré plus de 6 millions et demi de touristes, dont plus de 800 000 étrangers</p>
      <h2>statue liberte</h2>
     <center> <Image
         src="/images/statue-liberte.jpg"

        alt="statue- liberte"
        width={400}
        height={400}
        
        priority
      /></center>
      <p>La statue de la Liberté ou La Liberté éclairant le monde[1],[2] (en anglais : Liberty Enlightening the World)[3], ou simplement Liberté est l'un des monuments les plus célèbres des États-Unis. Cette statue monumentale est située à New York, sur Liberty Island, au sud de Manhattan, à l'embouchure du fleuve Hudson et à proximité d’Ellis Island.</p>
      <p>Construite et assemblée en France, sur une idée en 1865 du juriste Édouard Lefebvre de Laboulaye, au moment d'une collecte du quotidien Le Phare de la Loire pour honorer la veuve d'Abraham Lincoln[4], la statue fut offerte par le peuple français aux Américains, en signe d'amitié, et dévoilée au grand jour le 28 octobre 1886 en présence du président des États-Unis, Grover Cleveland, pour le centenaire de la Déclaration d'indépendance américaine.</p>
      <nav>
        <ul>
          <li><Link href="/histoire"> Histoire</Link></li>
          <li><Link href="/galerie"> Galerie</Link></li>
          <li><Link href="/infos"> Infos pratiques</Link></li>
        </ul>
      </nav>
    </section>
  );
}

            
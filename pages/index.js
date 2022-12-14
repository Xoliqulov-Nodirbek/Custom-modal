import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../components/Modal";
import Img from "../public/img.jpg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const addClass = () => {
    document.getElementById("fix").classList.add("fixed");
  };

  const removeClass = () => {
    document.getElementById("fix").classList.remove("fixed");
  };

  return (
    <>
      <Head>
        <title>Modal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="fix">
        <h1 className="text-4xl font-bold text-center">Create custom Modal!</h1>
        <div className="p-10 text-center">
          <button
            onClick={() => {
              setShowModal(true);
              addClass();
            }}
            className="text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-800 py-2 px-5 rounded-md font-bold shadow shadow-black outline-none transition-all duration-200"
          >
            Open modal
          </button>
          <button
            onClick={() => {
              setShowModal2(true);
              addClass();
            }}
            className="text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-800 py-2 px-5 rounded-md font-bold shadow shadow-black outline-none transition-all duration-200 ml-5"
          >
            Open modal2
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sit ea, quis aliquid sapiente officiis aut sed accusamus ipsam,
          necessitatibus eligendi, expedita dicta quam optio fugiat. Fuga
          dignissimos similique nihil beatae doloribus totam deleniti ducimus
          voluptates nobis! Eligendi incidunt ea voluptas consectetur
          necessitatibus ad molestiae facere, rem quia magni placeat tempora
          veniam, at eius debitis. Neque minus possimus distinctio eveniet
          blanditiis ex, voluptatem rem nihil maxime eum similique illo veniam
          natus, perspiciatis saepe, alias quod ullam fugit nulla. Eos
          voluptatem velit magni odio neque animi a vero ipsum fugiat rem optio,
          maxime eaque facere mollitia. Iusto repellat natus eveniet ipsa! Eius
          doloremque voluptates reprehenderit voluptas ipsam impedit accusantium
          distinctio, in ex ab sapiente incidunt dolorum officia id dolores.
          Consequatur optio reprehenderit doloribus repellendus quis nam
          laboriosam laborum, provident libero soluta saepe temporibus nulla
          quibusdam modi magnam omnis eius dicta qui incidunt enim voluptate!
          Sed ipsa iusto et ut voluptates adipisci soluta illo sint. Soluta
          explicabo ad error. Accusantium, perferendis sint! Quos omnis numquam
          velit ab nobis eligendi similique esse fugit voluptatibus deleniti
          tenetur, ea sequi? Earum dolorem facilis impedit adipisci mollitia,
          eaque in deserunt blanditiis? Ad accusantium possimus laboriosam ex
          veniam mollitia dolor officia quo fugiat saepe optio, dicta explicabo.
          Dolore deserunt reiciendis eius nemo corporis tenetur possimus optio
          facere libero sunt delectus, dignissimos autem nesciunt eum sed
          facilis officia? Voluptatem ipsum, doloribus sit animi porro odio
          culpa. Non sit illo, repudiandae amet porro mollitia dolorem quasi?
          Dolorum recusandae, necessitatibus repellat eos quod assumenda cumque
          aut maiores porro iure obcaecati adipisci sit delectus vel harum unde,
          atque deserunt eaque id! Culpa qui asperiores atque. Qui commodi
          quisquam nobis dolor perspiciatis nisi dolore laboriosam quibusdam
          libero animi ducimus, aspernatur corrupti saepe ab facilis tempora
          neque temporibus? Omnis ratione voluptate similique voluptatem cum
          amet, laudantium suscipit vitae, aspernatur ab neque fuga. Fugiat esse
          quaerat ipsa deserunt eaque ea facilis voluptas, ipsam possimus
          nostrum dolorem? Quas repellat atque molestias voluptate. Dolore est
          unde, ratione deserunt voluptate culpa impedit perspiciatis
          necessitatibus obcaecati. Perspiciatis esse in delectus ea omnis
          voluptatibus quo iure veritatis, accusantium iusto impedit sit maiores
          atque optio totam voluptas itaque amet, quidem dolor. Odit recusandae
          temporibus ratione atque quasi illo nesciunt blanditiis sit natus,
          maxime asperiores neque repellendus enim magnam officiis.
          Voluptatibus, cum! Totam expedita corporis, numquam ut asperiores
          magni vitae deleniti quam error, cumque delectus aperiam dolore eaque
          sunt nulla est, unde ipsum libero autem doloremque ex iste atque?
          Libero id beatae natus praesentium autem aspernatur repellendus
          obcaecati sit omnis enim asperiores optio eius repellat dolorum
          impedit voluptas illo totam sint, fuga alias! Voluptas repudiandae
          sunt quos, voluptate praesentium illum rem adipisci suscipit
          recusandae. Sunt architecto autem nam et soluta nihil odit quae
          consequuntur aperiam a ab ea, totam repellat. Tempora impedit
          accusamus nobis, suscipit ullam, quaerat hic non soluta officiis
          ducimus omnis. Omnis iste, pariatur soluta tenetur explicabo obcaecati
          numquam necessitatibus fugit magni dignissimos minus unde tempora.
          Eaque, maxime distinctio ab porro harum optio dolorum modi facere
          deserunt sint obcaecati alias. Nostrum esse ipsa architecto, suscipit
          odit cumque officia hic quibusdam provident quis expedita harum rerum
          natus? Doloremque sapiente, culpa repellat quaerat beatae consectetur
          mollitia commodi incidunt facilis quae illum aliquid ex cumque
          expedita ipsa cum corrupti aut eaque possimus! Sequi iusto magnam
          molestiae fugiat hic ex ut recusandae, placeat corrupti voluptate
          quisquam vitae unde inventore sunt alias incidunt porro possimus
          quibusdam, consequatur illo vero aut? Rem reiciendis quas provident
          commodi, similique expedita, dignissimos ipsam ex cupiditate
          aspernatur quidem? Odio nostrum cupiditate quis quibusdam consectetur
          ex officiis cum, illo, ipsam rem doloremque nobis deleniti! Atque
          eligendi hic architecto, quia magnam iste iure officiis blanditiis vel
          soluta. Explicabo perspiciatis cumque veniam, at mollitia maiores
          nobis pariatur ad natus corrupti quis doloribus odit nulla fugiat
          reiciendis, magni, aut quidem repudiandae perferendis beatae repellat
          voluptatibus. Error perspiciatis vero labore! Molestiae nulla
          assumenda distinctio reprehenderit omnis officiis eum voluptas amet
          sunt eius vel eos temporibus sequi repellendus corporis, iusto,
          aperiam mollitia doloremque, illum nobis sapiente unde quam! Nobis
          exercitationem perferendis enim assumenda atque inventore eligendi in
          harum laudantium vero sed architecto, placeat aliquid omnis explicabo
          nemo, eveniet consectetur sunt? Enim rem ullam itaque, possimus non
          odit temporibus, omnis harum ab totam dolor, culpa eaque iure! Maiores
          ipsam rem, quod suscipit sit atque corporis itaque temporibus animi
          ex? Tempora, laborum dolorum iste error nam vitae veritatis
          perferendis iusto nesciunt incidunt quod, officiis vero exercitationem
          libero distinctio sint deserunt tenetur illo. Placeat tenetur facere
          ea non fugiat eveniet ut adipisci distinctio ipsum, mollitia doloribus
          facilis corporis obcaecati ex voluptatibus reprehenderit voluptatem
          temporibus accusamus! Voluptatum voluptatibus impedit accusantium,
          molestiae ad fugit ut, perspiciatis explicabo quod optio provident
          quos fuga illum blanditiis culpa vitae tenetur temporibus ullam
          asperiores quae? Quia optio adipisci incidunt similique fuga illo
          labore, repudiandae minus repellendus magnam fugit atque illum
          voluptate unde numquam consequuntur quaerat? Molestias ex officia
          omnis corrupti magnam vero aliquid veniam repudiandae molestiae atque
          aspernatur voluptatem minima expedita eius ratione, mollitia vel culpa
          illum laudantium voluptatum cumque fugiat error corporis. Quibusdam
          explicabo dicta pariatur voluptate magni ab laborum dignissimos
          perspiciatis. Maiores eos iusto dolor quos sapiente est! Recusandae
          neque quidem optio, quaerat, autem pariatur illum consequuntur, sint
          iure atque inventore delectus modi! Laborum, exercitationem! Officiis
          explicabo excepturi dignissimos est atque sequi doloribus ducimus,
          earum nulla error aliquam magni corporis eaque corrupti eum!
          Perferendis, eius cupiditate hic corporis eos maiores. Quod id modi
          magnam, perferendis repellat incidunt alias veniam earum nesciunt sint
          possimus quasi deserunt quaerat optio vitae quibusdam. Eius
          praesentium natus voluptatum similique tempore voluptates earum
          repellat, magni numquam, neque nisi molestiae? Ipsam ipsa aliquid esse
          nostrum impedit quo soluta expedita quisquam fugit sequi, molestias ad
          aspernatur reiciendis iste, hic velit deleniti architecto eos
          quibusdam distinctio commodi quia ipsum maxime. Odio delectus, et
          voluptatibus assumenda blanditiis similique magnam voluptates minima
          placeat ea obcaecati est perferendis vel labore ipsam soluta possimus
          temporibus libero aliquam illum accusantium. Alias tenetur numquam
          nobis, eaque enim cumque doloribus possimus laboriosam hic minima
          eligendi, veritatis dolores amet quibusdam ipsa, sunt atque fuga
          temporibus voluptate perferendis voluptates asperiores! Cum illo
          cumque laboriosam excepturi odit id sit harum. Eligendi consequatur,
          vel voluptate incidunt corrupti quos necessitatibus nobis iusto
          consectetur! Accusamus id earum amet error voluptates deserunt.
          Placeat, modi maxime ratione deleniti doloribus, enim officiis
          distinctio nostrum suscipit non dolorum accusamus ea neque quam
          dolores ut tempore iure dolor? Ad labore fuga saepe, error tempora sit
          dolore esse! Ex assumenda quae eos laborum natus iste fugit, quaerat
          impedit corporis ipsam inventore eaque minus ducimus? Aperiam quam,
          iste facere tempora eaque ratione eius voluptatem quod inventore sunt
          fugit natus odit, illum explicabo totam asperiores aut autem officia
          rem ipsum at tempore officiis! Consequatur quod blanditiis mollitia.
          Incidunt dicta praesentium culpa inventore perspiciatis saepe vitae
          necessitatibus repudiandae, a ut officiis perferendis. Nisi distinctio
          dicta quis impedit itaque voluptate asperiores, enim expedita ad
          excepturi laborum molestiae autem magnam saepe illum perspiciatis,
          odit corrupti laudantium aspernatur quam et, mollitia nesciunt magni!
          Dicta odit voluptatem in optio exercitationem autem quidem illo, ipsa
          tempora repellendus. Soluta adipisci qui odio ea assumenda sit,
          perferendis voluptate doloremque at totam libero iure dolore iste
          saepe magnam non natus. Repellendus qui error vitae vel consectetur
          quas quam? Minima maiores dicta rerum laudantium magni esse qui nihil
          impedit eum totam molestias maxime repellat, odit ducimus voluptatem
          praesentium doloremque libero. Repellat sunt quo quidem culpa voluptas
          alias eligendi officiis voluptate! Nam veniam numquam molestias quam
          nesciunt illum unde quis, vitae architecto odio et est ad quisquam
          dicta molestiae, eligendi esse! Omnis, commodi explicabo? Temporibus
          omnis aut, repudiandae reprehenderit impedit ab possimus explicabo
          non. Fugiat est cum esse dolorem illum laudantium rerum, quisquam
          dicta saepe? Quidem quas harum accusantium officia perspiciatis
          mollitia reiciendis libero perferendis alias quibusdam impedit
          voluptate inventore, doloremque architecto! Dolor nemo fugit assumenda
          minus, pariatur praesentium possimus illum quibusdam laboriosam sunt.
          Molestias placeat laudantium quam incidunt, laboriosam id animi rem,
          possimus repudiandae debitis ea numquam velit reiciendis commodi nulla
          beatae perferendis perspiciatis! Quisquam quibusdam veniam magni et
          repellat incidunt architecto ut a iusto neque error omnis, eligendi
          esse sunt itaque porro. Veritatis atque reiciendis vero nobis maiores
          quasi animi, ratione alias. Earum nulla provident commodi magnam
          minima quo maiores quaerat repellat explicabo saepe. Labore vero ipsum
          dolorem iste expedita magni sunt possimus aperiam, tenetur culpa
          ratione eos saepe id ullam. Similique error, ipsam velit natus debitis
          possimus iste repellat impedit alias deleniti cupiditate harum! Ea ab
          rem sequi numquam minima blanditiis consequatur deleniti labore harum!
          Quibusdam exercitationem repellat quam expedita consectetur ipsa
          recusandae, quaerat inventore ratione illo non, illum rem quasi, alias
          soluta dolores nisi architecto eaque! Incidunt deleniti quisquam
          voluptates ad aperiam facilis maxime animi alias debitis harum, hic
          nihil ea recusandae eos reiciendis iste tenetur pariatur nisi velit
          asperiores voluptate eligendi. Esse nihil neque placeat eligendi,
          architecto sunt ullam accusantium quis ratione delectus voluptatum
          sequi saepe facere dolores provident dolore ad harum quasi possimus
          odio. Voluptatem nemo omnis repellat doloribus odio excepturi hic
          adipisci, aliquam quae atque laboriosam accusamus fugit optio eos
          magni quidem obcaecati dolores a modi error nisi cumque? Unde
          praesentium molestiae ullam beatae. Dolor modi, esse expedita vero
          nihil itaque voluptatum iste eligendi minima deserunt reprehenderit ut
          asperiores, dolorem repellat, quo nostrum sunt. Id qui repellendus
          corporis pariatur sit, nesciunt aspernatur illo provident laborum,
          saepe eius asperiores iusto quasi maiores dolorum velit. Maxime
          deserunt, ullam perspiciatis at cumque libero et, neque repellendus
          quam optio eligendi sit nemo animi consequuntur esse eum odio debitis
          nihil aperiam! Vitae optio debitis quaerat quod. Dolores, nostrum?
          Odit distinctio adipisci quis voluptatum eos nihil, voluptatem dolorum
          hic laboriosam iste quam ab sapiente repellendus nemo rem, itaque
          corrupti omnis ducimus! Similique ipsa, inventore, alias excepturi
          amet itaque odit provident fugiat sapiente fuga ea deleniti qui, fugit
          unde eum earum quos. Aperiam quo numquam adipisci minus velit eos
          eligendi voluptates ullam ut, illo deleniti totam repellat, quod
          laborum quibusdam illum quaerat facilis! Quas laboriosam repellendus
          eligendi consectetur nam laudantium aliquam doloribus iusto. Iste
          tempora dolorum consequatur autem qui aspernatur ut rerum culpa
          excepturi porro? Qui saepe reiciendis, non cupiditate sunt vero
          perspiciatis consequuntur obcaecati. Cum quidem nesciunt dignissimos
          illo fuga, nobis numquam officiis sapiente beatae sed id, ea veniam
          ducimus. Vel magnam molestias saepe ad animi optio veniam atque,
          repellendus quos, perferendis ex inventore quia dolorem nisi ducimus
          at nobis harum aspernatur consequatur iure voluptatum, quod maiores!
          Blanditiis soluta, quos eos, obcaecati, quas nihil perferendis debitis
          temporibus itaque distinctio maxime in? Nisi sequi deleniti recusandae
          iste temporibus illum consectetur nemo reiciendis, ipsa dolore
          molestias dicta nulla, amet perspiciatis, sed suscipit in quidem
          facere sit laboriosam! Laborum et minima pariatur? Corrupti iste quos
          asperiores repudiandae accusamus quas provident aspernatur distinctio
          quibusdam itaque! Libero corporis sunt sequi natus quod reprehenderit
          est tempora nulla aspernatur? Debitis maiores vel recusandae,
          consequuntur esse nesciunt ratione, quis, impedit laborum enim aliquam
          doloremque numquam natus autem? At voluptatum magni consequuntur
          tempora culpa odit molestiae illum neque corporis error obcaecati
          quisquam laborum natus officiis, temporibus quidem voluptatem id. Odit
          dignissimos saepe voluptatibus? Totam blanditiis, ipsam minus
          voluptate officiis dignissimos sequi a vitae corrupti tenetur
          voluptatem consequatur modi tempore eveniet dolore laudantium quam
          aliquam praesentium laboriosam. Nulla illo molestiae distinctio
          necessitatibus. Nostrum sed iure sapiente incidunt recusandae sequi
          iste voluptate tempora, quo dicta ea reprehenderit sit ex veritatis!
          Officiis hic sapiente asperiores explicabo tempore molestiae
          accusantium. Laudantium, nobis atque? Nam reprehenderit autem, neque
          quasi possimus eum? Ipsum facilis illum, corporis et veritatis
          officiis nemo dolorum quasi earum iste ducimus, amet obcaecati dolor
          cumque neque molestiae natus aspernatur perspiciatis quod! Hic fugit
          quis reprehenderit. Nesciunt cum vero explicabo suscipit. Quidem rem
          molestiae saepe. Quos quae perspiciatis doloremque officiis accusamus
          voluptatibus ut? Nobis est ex amet quidem, aperiam corporis? Tempora
          veritatis hic id ut culpa repellendus repellat, obcaecati adipisci,
          sit voluptatum beatae suscipit. Minima, obcaecati nihil. Similique
          distinctio itaque voluptates incidunt sed ab, nemo tenetur debitis
          sunt repellendus vero! Incidunt sunt soluta at unde, error, rem
          praesentium vitae natus fugiat consequatur enim velit saepe. Ipsum
          magni illo dolorem harum deleniti dolore aliquid eaque nostrum
          eligendi consectetur laborum quisquam voluptatum modi, nisi quia dolor
          maiores? Assumenda neque officia voluptatum rerum tempore reiciendis
          aperiam natus, mollitia quae sunt, iste eum sequi porro adipisci unde
          nihil.
        </p>

        {/* Modals */}

        <Modal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
            removeClass();
          }}
        >
          <div className="flex flex-col items-center mt-4">
            <Image src={Img} width={300} height={220} alt="image" />
            <button className="text-white mt-5 bg-blue-600 hover:bg-blue-400 active:bg-blue-800 py-1 px-3 rounded-md shadow shadow-black hover:shadow-lg outline-none transition-all duration-200">
              Submit
            </button>
          </div>
        </Modal>

        <Modal
          isVisible={showModal2}
          onClose={() => {
            setShowModal2(false);
            removeClass();
          }}
        >
          <div className="flex flex-col items-center mt-4">
            <iframe
              className="rounded-lg"
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/nwJK-jo91vA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button className="text-white mt-5 bg-blue-600 hover:bg-blue-400 active:bg-blue-800 py-1 px-3 rounded-md shadow shadow-black hover:shadow-lg outline-none transition-all duration-200">
              Submit
            </button>
          </div>
        </Modal>
      </main>
    </>
  );
}

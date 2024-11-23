import React, { useState } from "react";
import ModalImage from "./modal";
import './style.css';
import { IoIosArrowBack } from "react-icons/io";
import { GrNext } from "react-icons/gr";

function Galery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chooseImage, setChooseImage] = useState({});
  const images = [
    {
      id: 0,
      url: 'https://img.freepik.com/fotos-premium/por-do-sol-brilhante-no-horizonte-ia-generativa_835692-138.jpg?w=740',
    },
    {
      id: 1,
      url: 'https://img.freepik.com/fotos-gratis/bela-foto-de-colinas-gramadas-cobertas-por-arvores-perto-de-montanhas-nas-dolomitas-italia_181624-24400.jpg?t=st=1732136271~exp=1732139871~hmac=0346c7e5436c644a3f7fe2931a01e1a218be4edeedb319b6b5993714b05619a9&w=740',
    },
    {
      id: 2,
      url: 'https://img.freepik.com/fotos-premium/uma-vista-do-por-do-sol-de-colinas-verdes-e-montanhas_920019-2235.jpg?w=740',
    },
    {
      id: 3,
      url: 'https://img.freepik.com/fotos-gratis/caminho-cercado-por-arbustos-e-vegetacao-que-leva-a-um-povoado-e-um-mar-ao-por-do-sol_181624-21284.jpg?t=st=1732136302~exp=1732139902~hmac=a519376a808121a124fd7b48b00ebf7bc53011d514214a6318126ae6180d4b75&w=740',
    },
  ];

  const openModal = (image) => {
    setIsModalOpen(true);
    setChooseImage(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para impedir a propagação do clique na modal-content
  const handleContentClick = (e) => {
    e.stopPropagation(); // Previne o fechamento ao clicar no conteúdo
  };

  const backImage=(imageToFind)=>{
	const index=images.findIndex(image => image.id === imageToFind.id);
	// Se a imagem não for a primeira do array, retorna a imagem anterior
	if (index > 0) {
	setChooseImage(images[index - 1]);
      }
      return undefined;
  }
  const nextImage=(imageToFind)=>{
	const index=images.findIndex(image => image.id === imageToFind.id);
	// Se a imagem não for a ultima do array, retorna a imagem posterior
	if (index !== (images.length-1)) {
	   setChooseImage(images[index + 1]);
      }
      return undefined;
  }
  return (
    <> <h1 style={{textAlign:'center'}}>Galeria</h1>
    <div className="galery-body">
     
      {images.map((image) => (
        <div key={image.id} onClick={() => openModal(image)}>
          <img src={image.url} alt="Gallery item" />
        </div>
      ))}

      {isModalOpen && (
        <div onClick={closeModal} className="modal-overlay">	
	
          <div className="modal-content" onClick={handleContentClick}>
          <div style={{display:'flex'}}>
	  <button onClick={()=>backImage(chooseImage)} id="back-button"><IoIosArrowBack /></button>
	  <button id="close-modal-button" onClick={closeModal}>X</button>
            <ModalImage image={chooseImage} />
	    <button onClick={()=>nextImage(chooseImage)} id="next-button">
        <GrNext />
	    </button>
      </div>
          </div>
	 
        </div>
      )}
    </div>
    </>
  );
}

export default Galery;


export default function decorate(block) {
  block.classList.add('custom-card-container');

  const cardElements = block.querySelectorAll('.cards > div');
  cardElements.forEach(card => {
    card.classList.add('custom-card');
    
    const imgWrapper = card.querySelector('picture').parentElement;
    imgWrapper.classList.add('custom-image-wrapper');
    
    const linkWrapper = card.querySelector('a').parentElement;
    linkWrapper.classList.add('custom-link-wrapper');
  });
}

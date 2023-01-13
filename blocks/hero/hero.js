import { loadBlock } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const artDirection = block.querySelector('.art-direction.block');
  if (artDirection) {
    await loadBlock(artDirection);
  }
}

import { fetchPlaceholders, getMetadata } from
'../../scripts/lib-franklin.js';
export default async function decorate(block) {
const placeholders = await fetchPlaceholders('');
console.log(placeholders);
}
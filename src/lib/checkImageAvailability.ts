/**
 * Checks the availability of a card image by making a request to the specified URL depending
 * on the specified size and ID.
 *
 * @param imageID - The ID of the image to check.
 * @param size - The size of the image to check.
 * @return A promise that resolves to true if the image is available, false otherwise.
 */
export default async function checkImageAvailability(
	imageID: string,
	size: "small" | "full" | "cropped"
) {
	try {
		const response = await fetch(
			`https://deckvault.b-cdn.net/card_images/${size}/${imageID}.webp`
		);
		return response.ok ? true : false;
	} catch (error) {
		return false;
	}
}

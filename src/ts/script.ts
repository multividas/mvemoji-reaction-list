export async function fetchAndParseHtml(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.text();

    // Parse the HTML and extract the relevant part
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    // Extract the entire div block
    const divBlock = doc.querySelector('.mvemoji-reaction-list-dropdown');
    const extractedHtml = divBlock ? divBlock.outerHTML : '';

    return extractedHtml;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return '';
  }
}

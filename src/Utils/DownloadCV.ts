export const downloadCv = () => {
    const url = '/Ezequiel-Benitez-Backend-CV-English.pdf'

    const linkDownload = document.createElement('a');
    linkDownload.href = url;

    linkDownload.download = "Ezequiel-Benitez-CV-English";

    document.body.appendChild(linkDownload);
    linkDownload.click();

    document.body.removeChild(linkDownload);
}
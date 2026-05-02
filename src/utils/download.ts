// A simple utility to trigger a download of a text file that acts as our lead magnet.
// In a real scenario, this would point to an actual PDF file on the server or a CDN.

export const downloadLeadMagnet = () => {
  const a = document.createElement('a');
  a.href = '/Digital_Suicide_Guide.pdf';
  a.download = 'Digital_Suicide_Guide.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


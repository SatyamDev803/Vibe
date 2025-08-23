/**
 * For hackathon demo, we let users paste/upload image URLs from dCellar manually.
 * If you want programmatic uploads, you’d request a presigned URL from backend.
 */

export async function uploadToGreenfield(file) {
  // --- Demo fallback ---
  // For now, pretend the file is uploaded and return a fake hash.
  // Replace with real Greenfield SDK calls if you add them.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: URL.createObjectURL(file),
        hash: "fakeHash_" + Date.now(),
      });
    }, 800);
  });
}

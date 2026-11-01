/**
 * Audio utilities for BHASHA SETU
 * Handles Base64 -> Blob -> Object URL, and binary Blob handling
 * Ensures cleanup to avoid memory leaks
 */

export function base64ToBlob(base64: string, contentType: string = "audio/mpeg"): Blob {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: contentType });
}

export function base64ToObjectUrl(base64: string, contentType: string = "audio/mpeg"): string {
  const blob = base64ToBlob(base64, contentType);
  return URL.createObjectURL(blob);
}

export function blobToObjectUrl(blob: Blob): string {
  return URL.createObjectURL(blob);
}

export function revokeObjectUrl(url: string | null) {
  if (url && url.startsWith("blob:")) {
    try {
      URL.revokeObjectURL(url);
    } catch {}
  }
}

/**
 * Hook-friendly audio manager
 */
export type AudioState = "idle" | "loading" | "playing" | "paused" | "error";

export function createAudioFromBase64(base64: string, contentType: string = "audio/mpeg"): { url: string; blob: Blob } {
  const blob = base64ToBlob(base64, contentType);
  const url = URL.createObjectURL(blob);
  return { url, blob };
}

export function createAudioFromBlob(blob: Blob): string {
  return URL.createObjectURL(blob);
}

/**
 * Clave de sessionStorage usada para distinguir una vista de post que llega
 * desde un click en la lista ("click") de una visita directa por URL ("direct").
 *
 * Como la navegación entre la lista y el post recarga la página (SSR), no
 * podemos usar el state del router para transmitir esa intención; lo dejamos
 * en sessionStorage al hacer click y lo leemos al montar la página del post.
 */
export const FROM_CLICK_STORAGE_KEY = "blog:fromClick";

/**
 * Marca puesta al entrar al blog desde el NavBar de la web (no por URL directa
 * ni enlace externo). La usa la lista del blog para mostrar el enlace "volver a
 * la web" solo en ese caso. Vive en sessionStorage, así que es por pestaña.
 */
export const FROM_SITE_STORAGE_KEY = "blog:fromSite";

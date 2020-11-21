export const dateParse = new Date();
// Дата для отображения в карточках
export const toArticleDate = `${dateParse.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${dateParse.getFullYear()}`;

// Дата одной недели назад
dateParse.setDate(dateParse.getDate() - 7);
export const weekAgo = dateParse;

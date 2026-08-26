

export const obsidianToMarkdown = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, name) => {
    const anzeigeName = name.replace(/^\d+[-_]/, '');
    return `[${anzeigeName}](${name})`;
  });
}
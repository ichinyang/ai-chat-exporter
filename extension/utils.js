// Utility functions for AI Chat Exporter

// Convert HTML to Markdown
function htmlToMarkdown(html) {
  if (!html) return '';

  // Create a temporary div to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;

  let markdown = '';

  // Process each node
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }

    const tagName = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map(processNode).join('');

    switch (tagName) {
      case 'p':
        return children + '\n\n';
      case 'h1':
        return '# ' + children + '\n\n';
      case 'h2':
        return '## ' + children + '\n\n';
      case 'h3':
        return '### ' + children + '\n\n';
      case 'strong':
      case 'b':
        return '**' + children + '**';
      case 'em':
      case 'i':
        return '*' + children + '*';
      case 'code':
        return '`' + children + '`';
      case 'pre':
        return '```\n' + children + '\n```\n\n';
      case 'ul':
        return children;
      case 'ol':
        return children;
      case 'li':
        const prefix = node.parentElement.tagName === 'OL' ? '1. ' : '- ';
        return prefix + children.trim() + '\n';
      case 'table':
        return convertTable(node) + '\n\n';
      case 'br':
        return '\n';
      case 'div':
        // Check if it's a message container
        if (node.classList.contains('user-message') || node.classList.contains('assistant-message')) {
          const role = node.getAttribute('data-role') || 
                      (node.classList.contains('user-message') ? 'user' : 'assistant');
          const prefix = role === 'user' ? '**You:**\n' : '**Assistant:**\n';
          return prefix + children.trim() + '\n\n';
        }
        return children;
      default:
        return children;
    }
  }

  // Convert table to markdown
  function convertTable(table) {
    const rows = table.querySelectorAll('tr');
    if (rows.length === 0) return '';

    let markdown = '';
    const headerRow = rows[0];
    const headerCells = headerRow.querySelectorAll('th, td');
    
    // Header
    markdown += '| ' + Array.from(headerCells).map(cell => cell.textContent.trim()).join(' | ') + ' |\n';
    markdown += '| ' + Array.from(headerCells).map(() => '---').join(' | ') + ' |\n';

    // Data rows
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll('td');
      markdown += '| ' + Array.from(cells).map(cell => cell.textContent.trim()).join(' | ') + ' |\n';
    }

    return markdown;
  }

  markdown = processNode(temp);
  
  // Clean up extra newlines
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  return markdown.trim();
}

// Generate a smart title from content
function generateTitle(content) {
  if (!content) return 'Untitled Export';

  // Create temp element to extract text
  const temp = document.createElement('div');
  temp.innerHTML = content;

  // Get first meaningful text
  const text = temp.textContent || '';
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  if (lines.length === 0) return 'Untitled Export';

  // Use first line, truncate to 80 chars
  let title = lines[0].trim();
  
  // Remove common prefixes
  title = title.replace(/^(You|Assistant|User|AI):\s*/i, '');
  
  // Truncate
  if (title.length > 80) {
    title = title.substring(0, 77) + '...';
  }

  // Sanitize for filename
  return title || 'Untitled Export';
}

// Generate filename
function generateFilename(title, source = 'chat') {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Slugify title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit length

  return `${year}-${month}-${day}-${source}-${slug}.md`;
}

// Format tags string
function formatTags(tagsString) {
  if (!tagsString || !tagsString.trim()) return '';
  
  const tags = tagsString
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
    .map(tag => tag.startsWith('#') ? tag : '#' + tag);
  
  return tags.join(' ');
}

// Create full markdown document
function createMarkdownDocument(title, tags, content) {
  let doc = `# ${title}\n\n`;
  
  if (tags) {
    const formattedTags = formatTags(tags);
    if (formattedTags) {
      doc += `Tags: ${formattedTags}\n\n`;
    }
  }
  
  doc += '---\n\n';
  doc += content;
  
  return doc;
}

// Make functions available globally for popup.js
window.htmlToMarkdown = htmlToMarkdown;
window.generateTitle = generateTitle;
window.generateFilename = generateFilename;
window.formatTags = formatTags;
window.createMarkdownDocument = createMarkdownDocument;

// Also export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    htmlToMarkdown,
    generateTitle,
    generateFilename,
    formatTags,
    createMarkdownDocument
  };
}


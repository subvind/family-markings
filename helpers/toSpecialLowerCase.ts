
export function toSpecialLowerCase (collection: string) {
  collection = collection.replace('~', '`')
  collection = collection.replace('!', '1')
  collection = collection.replace('@', '2')
  collection = collection.replace('#', '3')
  collection = collection.replace('$', '4')
  collection = collection.replace('%', '5')
  collection = collection.replace('^', '6')
  collection = collection.replace('&', '7')
  collection = collection.replace('*', '8')
  collection = collection.replace('(', '9')
  collection = collection.replace(')', '0')
  collection = collection.replace('_', '-')
  collection = collection.replace('+', '=')
  collection = collection.replace('{', '[')
  collection = collection.replace('}', ']')
  collection = collection.replace('|', '\\')
  collection = collection.replace(':', ';')
  collection = collection.replace('"', '\'')
  collection = collection.replace('<', ',')
  collection = collection.replace('>', '.')
  collection = collection.replace('?', '/')

  return collection
}
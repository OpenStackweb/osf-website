export function nominatorLabel(application) {
  const member = application?.nominator;
  const name = [member?.first_name, member?.last_name]
    .filter(value => typeof value === 'string' && value.trim())
    .map(value => value.trim()).join(' ');
  if (name) return name;
  const masked = application?.nominator_masked_email;
  return typeof masked === 'string' && masked.includes('*') ? masked : 'Name not provided';
}

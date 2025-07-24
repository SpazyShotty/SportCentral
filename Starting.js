function simulate() {
  const id = document.getElementById('userId').value;
  const count = parseInt(document.getElementById('followerCount').value);
  const output = document.getElementById('output');

  if (!id || !count || count <= 0) {
    output.textContent = 'Please enter a valid ID and follower count.';
    return;
  }

  // Username parts
  const prefixes = ['skibidilover', 'capybara_fan', 'melonmaster', 'robloxian', 'noobslayer', 'epicbuilder'];
  const suffixes = ['123', 'xX', 'zone', 'wave'];

  // Birthday generator
  function randomBirthday() {
    const year = Math.floor(Math.random() * (2014 - 1985 + 1)) + 1985; // Between '85–'14
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  }

  // Generate followers
  let followers = '';
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 10000);
    const birthday = randomBirthday();
    const username = `${prefix}${suffix}`;
    followers += `• <strong>${username}</strong> (Birthday: ${birthday})<br>`;
  }

  output.innerHTML = `<strong>${id}</strong> has gained <strong>${count}</strong> simulated followers! 🎉<br><br>${followers}`;
}

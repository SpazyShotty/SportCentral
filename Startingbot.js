function simulate() {
  const id = document.getElementById('userId').value.trim();
  const count = parseInt(document.getElementById('followerCount').value);
  const output = document.getElementById('output');

  if (!id || isNaN(count) || count <= 0) {
    output.innerHTML = '<span style="color: yellow;">Please enter a valid ID and follower count.</span>';
    return;
  }

  const prefixes = ['skibidilover', 'capybara_fan', 'melonmaster', 'robloxian', 'noobslayer', 'epicbuilder'];
  const suffixes = ['123', 'xX', 'zone', 'wave'];

  function randomBirthday() {
    const year = Math.floor(Math.random() * (2014 - 1985 + 1)) + 1985;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  }

  let followers = '';
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 10000);
    const username = `${prefix}${suffix}`;
    const birthday = randomBirthday();
    followers += `• <strong>${username}</strong> <em>(Birthday: ${birthday})</em><br>`;
  }

  output.innerHTML = `<strong>${id}</strong> has gained <strong>${count}</strong> simulated followers! 🎉<br><br>${followers}`;
}

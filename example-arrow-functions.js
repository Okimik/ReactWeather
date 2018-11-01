var names = ['Pedro', 'Sheila', 'Sofia', 'Carolina'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('forEach', name);
});

describe('object-intro', () => {
  it('Есть ли объект start', () => {
    expect(start).toBeDefined();
    expect(Object.keys(start).length).toBe(2);
  });

  it('Есть ли объект person', () => {
    expect(typeof person.firstname).toBe('string');
    expect(typeof person.lastname).toBe('string');
    expect(typeof person.city).toBe('string');
    expect(typeof person.age).toBe('number');
    expect(typeof person.height).toBe('number');
    expect(typeof person.heightMeters).toBe('string');
    expect(typeof person.haveCar).toBe('boolean');
    expect(typeof person.mobilePhone).toBe('object');
    expect(Object.keys(person.mobilePhone).length).toBe(3);
  });
});

describe('messages', () => {
  it('Массив messages', () => {
    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toBeGreaterThanOrEqual(5);

    messages.forEach((message) => {
      expect(typeof message).toBe('object');
      expect(typeof message.id).toBe('number');
      expect(typeof message.author).toBe('string');
      expect(typeof message.text).toBe('string');
      expect(typeof message.type).toBe('string');
      expect(typeof message.time).toBe('string');
    });
  });
});

describe('objects and functions', () => {
  it('getName', () => {
    expect(getName({ name: 'test', x: 123 })).toBe('test');
  });

  it('getNames', () => {
    expect(
      getNames({
        firstname: 'a',
        lastname: 'b',
      })
    ).toEqual(['a', 'b']);
  });

  it('concatNames', () => {
    expect(
      concatNames(
        {
          firstname: 'Alvi',
          age: 27,
        },
        'Test'
      )
    ).toBe('Alvi Test');
  });

  it('correctName', () => {
    const firstPerson = {
      firstname: 'Alvi',
      lastname: 'Tsugaev',
      fathername: undefined,
    };

    const secondPerson = {
      firstname: 'Akhmad',
      lastname: 'Kuduzow',
      fathername: 'Yakubovich',
    };

    expect(correctName(firstPerson)).toBe('Alvi');
    expect(correctName(secondPerson)).toBe('Akhmad Kuduzow Yakubovich');
  });
});

/* global expect, getValues */

describe('getValues(object)', () => {

  beforeEach(() => {
    expect(getValues).to.be.a('function');
  });

  it('returns Dave\'s property values', () => {
    const dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    const output = getValues(dave);
    expect(output)
      .to.be.an('array')
      .with.length(2)
      .that.includes('David')
      .and.includes('Thomas');
  });

  it('returns LearningFuze\'s property values', () => {
    const learningFuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    };
    const output = getValues(learningFuze);
    expect(output)
      .to.be.an('array')
      .with.length(3)
      .that.includes(33.6349)
      .that.includes('sanguine')
      .and.includes(117.7405);
  });

  it('returns Tim\'s property values', () => {
    const tim = {};
    const output = getValues(tim);
    expect(output).to.deep.equal([]);
  });

});

import * as assert from 'assert';

import * as t from '../src/alltecniques';
import * as q from '../src/questions';

describe('T', function() {
    it('Inicialment currentWord val 0', function() {
      assert.equal(t.currentWord, 0);
    });
}
);

describe('q', function() {
  it('Disposem de més de 5 preguntes', function() {
    assert.equal(q.Q.length > 5, true , "El questionari hauria de tenir més de 5 preguntes.");
  });
}
);

describe('T + q', function() {
  it('Carrega les preguntes', function() {
    t.massageQuestionsClass(1,q.Q);
    t.getItemClass();
    assert.equal(t.currentItem.tecnica > "", true, "Haig de rebre una pregunta");
  });
}
);

describe('T + q + check answers', function() {
  it('Comprova les respostes', function() {

    for (let i=0;i<10000;i++)
    {
      t.massageQuestionsClass(5,q.Q);
      t.resetCurrentWord();
      t.getItemClass();
      let words = t.currentItem.tecnica.split(" ");
  
      words.forEach( (word) => {
        let choices = t.choseOptionsClass();
        assert.equal( choices.filter(x=>x==word).length > 0, true, 
                     "Iteració: ["+i+"] "+ " Current Word [" + t.currentWord + "] " +
                     "Tècnica: ["+ t.currentItem.tecnica + "] " +
                     "Alt: ["+ t.currentItem.alt + "] " +
                     "Cal trobar tecnica [" + word + "] dins [" + choices + "]" );
        t.increasseCurrentWord();
      });
  
      words = t.currentItem.alt.split(" ").filter(x=>x!="");
      t.resetCurrentWord();
      words.forEach( (word) => {
        let choices = t.choseOptionsClass();
        assert.equal( choices.filter(x=>x==word).length > 0, true, 
                      "Iteració: ["+i+"] " + " Current Word [" + t.currentWord + "] " +
                      "Alt: ["+ t.currentItem.alt + "] " +
                      "Cal trobar alt [" + word + "] dins [" + choices + "]" );
        t.increasseCurrentWord();
      });
    }

  });
}
);


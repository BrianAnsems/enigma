//Enigma Javascript Page
var PageManager = {
	init: function()
	{
		this.updateCodedText();
	},
	updateCodedText: function(plainText)
	{
		var instance = this;
		$('#encipher').click(function(e)
		{
			e.preventDefault();
			$.ajax({
				success: function()
				{
					var pText = document.getElementById("plaintext").value.toLowerCase();
					var cKey = parseFloat(document.getElementById("ceasarkey").value);
					console.log(cKey);
					var eText = function(text){
						var code = "";
						var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
						var cipherAlphabet = [];
						for(var a=0;a<alphabet.length;a++)
						{
							cipherAlphabet.push(alphabet[a]);
						}
						for (var p=0;p<cKey;p++)
						{
							var letter = cipherAlphabet.pop();
							cipherAlphabet.unshift(letter);
						}
						for(var i=0;i<text.length;i++)
						{
							var ciphered = false;
							for(var k=0;k<alphabet.length;k++)
							{
								if(text[i]==" ")
								{
									code = code+" ";
									ciphered=true;
								}
								if(text[i]==alphabet[k])
								{
									code = code+cipherAlphabet[k];
									ciphered=true;
								}
							}
							if(ciphered==false)
							{
								code = code+text[i];
							}
							else{ciphered=false;}
						}
						return code;
					};
					var codeText = eText(pText);
					$('#encipheredtext').html(codeText);
				}
			});
		}
		);
	}
}
PageManager.init();
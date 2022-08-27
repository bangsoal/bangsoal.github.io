document.querySelector('#pembahasan1').style.display = 'none';
document.querySelector('#pembahasan2').style.display = 'none';

function kirim() {
			const jno1 = document.querySelector('#jno1');
			const jno2 = document.querySelector('#jno2');

			const rno1 = document.querySelector('#rno1');
			const rno2 = document.querySelector('#rno2');
			const nilai = document.querySelector('#nilai');

			let response
			let poin = 0;
			// Soal nomor 1
			if(jno1.checked) {
				response = 'Jawaban kamu benar';
				rno1.style = 'color: green;';
				poin+=10;
			}

			else {
				response = 'Jawaban kamu salah';
				rno1.style = 'color: red;';
				document.querySelector('#pembahasan1').style.display = 'block';
			}
			rno1.innerHTML = response;

			// Soal nomor 2
			if(jno2.checked) {
				response = 'Jawaban kamu benar';
				rno2.style = 'color: green;';
				poin+=10;
			}

			else {
				response = 'Jawaban kamu salah';
				rno2.style = 'color: red;';
				document.querySelector('#pembahasan2').style.display = 'block';
			}
			rno2.innerHTML = response;

			nilai.innerHTML = poin;
		}

document.addEventListener('DOMContentLoaded', () => {
    const perfilURL = 'https://api.github.com/users/CarlosJFigueiredo';
    const reposURL = 'https://api.github.com/users/CarlosJFigueiredo/repos';
  
    // Função para buscar dados do perfil
    async function fetchProfile() {
      try {
        const response = await fetch(perfilURL);
        const perfil = await response.json();
  
        const perfilContent = `
          <img src="${perfil.avatar_url}" alt="Foto de perfil" width="160px" height="160px">
          <div class="texto">
            <h3>${perfil.name}</h3>
            <p>${perfil.bio || 'Sem biografia disponível.'}</p>
            <div class="icone">
              <div class="tex">
                <p><strong>Localização:</strong> ${perfil.location || 'Não especificado'}</p>
                <p><strong>E-mail:</strong> ${perfil.email || 'Não disponível'}</p>
              </div>
              <div class="comp">
                <i class="fa-solid fa-users fa-2x"></i>
                <p>${perfil.followers}</p>
              </div>
            </div>
            <div class="redes-sociais">
              <a href="${perfil.html_url}" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="${perfil.blog}" target="_blank"><i class="fa-solid fa-link"></i></a>
              <a href="${}

            </div>
          </div>
        `;
  
        document.getElementById('perfil-content').innerHTML = perfilContent;
      } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error);
      }
    }
  
    // Função para buscar dados dos repositórios
    async function fetchRepos() {
      try {
        const response = await fetch(reposURL);
        const repos = await response.json();
  
        const reposContent = repos.map(repo => `
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${repo.name}</h5>
                <p class="card-text">${repo.description || 'Sem descrição disponível.'}</p>
                <a href="${repo.html_url}" class="btn btn-primary" target="_blank">Ver repositório</a>
              </div>
            </div>
          </div>
        `).join('');
  
        document.getElementById('repos-content').innerHTML = reposContent;
      } catch (error) {
        console.error('Erro ao buscar dados dos repositórios:', error);
      }
    }
  
    // Chamar as funções para buscar dados
    fetchProfile();
    fetchRepos();
  });
  
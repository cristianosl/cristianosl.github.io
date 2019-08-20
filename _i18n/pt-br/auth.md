<section id="authorization">
  <h2>
    Autenticação
  </h2>
  <br />
  <h3>
    Modelo de autenticação
  </h3>
  <p>
    O modelo de autenticação utilizado pela API segue a
    especificação OAuth2 definida pela
    <a href="https://tools.ietf.org/html/rfc6749%5D">RFC 6749</a>.
  </p>
  <p>
    Os tokens seguem o padrão JWT com algumas claims específicas
    para o ecossistema AME:
  </p>
  <script src="https://gist.github.com/GustavoBezerra/409dba0e8ec8f7359d05932b6de91711.js"></script>
  <p>
    Para se obter um token é necessário seguir um fluxo de
    autenticação chamado
    <code>client_credentials</code>, onde através de um
    <code>client_id</code> e <code>secret</code> a aplicação obtém
    um token que é utilizado para interagir de forma segura com a
    Ame Digital. Os dados de acesso <code>client_id</code> e
    <code>client_secret</code> são obtidos através de um contato
    formal com um de nossos representantes.
  </p>
  <br />
  <p>
    Todos os endpoints definidos na Ame Digital devem receber um
    Header de autenticação chamado
    <code>Authorization</code> com o seguinte valor:
    <code>Bearer {ACCESS_TOKEN}</code>. O endpoint
    <code>/api/auth/oauth/token</code> descreve como se obter este
    token de acesso.
  </p>
  <p>
    Todo token possui prazo de expiração, e após atingir este prazo
    será retornado 401 das API`s.
  </p>
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th>Security scheme type:</th>
          <td>OAuth2</td>
        </tr>
        <tr>
          <th>clientCredentials OAuth Flow</th>
          <td>
            <div>
              <strong> Token URL: </strong>https://api.hml.amedigital.com/api/auth/oauth/token
            </div>
            <div><strong> Scopes: </strong></div>
            <ul>
              <li><code>read</code> - Concede acesso de leitura</li>
              <li>
                <code>write</code> - Concede acesso de escrita
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<br />
<section id="token">
  <h2>
    Adquirindo um token de acesso
  </h2>
  <p>
    Um token de acesso representa as credenciais necessárias para
    interagir com as API's da Ame Digital, abaixo segue a descrição
    de como gerar um token.
  </p>

  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/auth/oauth/token
          </th>
        </tr>
        <tr class="striped">
          <th class="table-active" colspan="2">
            HEADER PARAMETERS:
          </th>
        </tr>
        <tr>
          <th>
            Authorization (Basic):
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Authorization Basic contendo o <code>client_id</code> e
            <code>client_secret</code> recebidos pela Ame. Por
            exemplo:
            <br />
            <br />
            <code>curl --user {client_id}:{client_secret} -H
                          'Content-Type: application/x-www-form-urlencoded' -d
                          grant_type=client_credentials
                          https://api.hml.amedigital.com/api/auth/oauth/token</code>
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">
            REQUEST BODY SCHEMA:
            <code>application/x-www-form-urlencoded</code>
          </th>
        </tr>
        <tr>
          <th>grant_type</th>
          <td>
            <code>string</code>
            <br />
            Sempre utilizar <code>client_credentials</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <h5>Responses</h5>
  <br />
  <div class="acoordion" id="accordion200Token">
    <div class="card">
      <div class="card-header bg-ame-success text-success" data-toggle="collapse" data-target="#collapse200Token"
        aria-expanded="true" aria-controls="collapse200Token" id="heading200Token">
        <b>200</b> Autenticação realizada com sucesso
      </div>
      <div id="collapse200Token" class="collapse show" aria-labelledby="heading200Token"
        data-parent="#accordion200Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>token_type</th>
                  <td>
                    <code>string</code>
                    <br />
                    Sempre será Bearer
                  </td>
                </tr>
                <tr>
                  <th>expires_in</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Tempo de expiração do token em segundos
                  </td>
                </tr>
                <tr>
                  <th>access_token</th>
                  <td>
                    <code>string</code>
                    <br />
                    Token de acesso as API's
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Token" data-toggle="collapse"
        data-target="#collapse400Token" aria-expanded="true" aria-controls="collapse400Token">
        <b>400</b> Parâmetros da requisição inválidos
      </div>
      <div id="collapse400Token" class="collapse show" aria-labelledby="heading400Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading401Token" data-toggle="collapse"
        data-target="#collapse401Token" aria-expanded="true" aria-controls="collapse401Token">
        <b>401</b> Não autorizado, acesso negado.
      </div>
      <div id="collapse401Token" class="collapse show" aria-labelledby="heading401Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading403Token" data-toggle="collapse"
        data-target="#collapse403Token" aria-expanded="true" aria-controls="collapse403Token">
        <b>403</b> Você não tem permissão para realizar esta
        operação.
      </div>
      <div id="collapse403Token" class="collapse show" aria-labelledby="heading403Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading405Token" data-toggle="collapse"
        data-target="#collapse405Token" aria-expanded="true" aria-controls="collapse405Token">
        <b>405</b> O verbo utilizado para requisição não é
        suportado.
      </div>
      <div id="collapse405Token" class="collapse show" aria-labelledby="heading405Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading500Token" data-toggle="collapse"
        data-target="#collapse500Token" aria-expanded="true" aria-controls="collapse500Token">
        <b>5XX</b> Ocorreu um erro interno, tente novamente mais
        tarde. Se o problema persistir entre em contato com o
        suporte técnico.
      </div>
      <div id="collapse500Token" class="collapse show" aria-labelledby="heading500Token">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />


  <section id="cancelandoOrdem">
    <h2>Cancelando uma ordem</h2>
    <br />
    <p>
      Caso uma autorização tenha sido realizada, o saldo do cliente
      foi provisionado (reservado). Se por algum motivo o lojita
      realizar o cancelamento desta ordem o mesmo deverá realizar o
      cancelamento da autorização na Ame Digital. Caso esse processo
      não ocorra, o saldo do cliente continuará preso.
    </p>
    <br />
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="table-active text-center bg-light" colspan="2">
              <span class="badge badge-info">PUT</span>
              https://api.hml.amedigital.com/api/wallet/user/payments/{id}/cancel
            </th>
          </tr>
          <tr class="striped">
            <th class="table-active" colspan="2">
              HEADER PARAMETERS:
            </th>
          </tr>
          <tr>
            <th>
              Authorization:
              <br />
              <code>required</code>
            </th>
            <td>
              <code>string</code><br />
              Example: <code>Bearer Token {ACCESS_TOKEN}</code>
              <br />
              Token de acesso formado pela seguinte regra
              <code>token_type</code> +
              <code>access_token</code> (onde token type é sempre
              <b>Bearer</b>)
            </td>
          </tr>
          <tr>
            <th class="table-active" colspan="2">
              PATH PARAMETERS
            </th>
          </tr>
          <tr>
            <th>
              id
              <br />
              <code>required</code>
            </th>
            <td>
              <code>string (uuid)</code>
              <br />
              Exemplo:
              <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code>
              <br />
              ID da ordem gerado pela Ame no momento da autorização
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <h5>Responses</h5>
    <br />
    <div class="acoordion" id="accordionExample">
      <div class="card">
        <div class="card-header bg-ame-success text-success" id="heading200Cancel" data-toggle="collapse"
          data-target="#collapse200Cancel" aria-expanded="true" aria-controls="collapse200Cancel">
          <b>200</b> Ordem cancelada com sucesso
        </div>
        <div id="collapse200Cancel" class="collapse show" aria-labelledby="heading200Cancel">
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
                    <th>id</th>
                    <td>
                      <code>string (uuid)</code>
                      <br />
                      ID da ordem
                    </td>
                  </tr>
                  <tr>
                    <th>ttl</th>
                    <td>
                      <code>string (date-time)</code>
                      <br />
                      Data de expiração
                    </td>
                  </tr>
                  <tr>
                    <th>title</th>
                    <td>
                      <code>string</code>
                      <br />
                      Título da transação
                    </td>
                  </tr>
                  <tr>
                    <th>description</th>
                    <td>
                      <code>string</code>
                      <br />
                      Descrição da transação
                    </td>
                  </tr>
                  <tr>
                    <th>type</th>
                    <td>
                      <code>string (OrderType)</code>
                      <br />
                      Enum: <code>"TRANSFER"</code>
                      <code>"PAYMENT"</code>
                      <br />
                      Tipo de ordem
                    </td>
                  </tr>
                  <tr>
                    <th>currency</th>
                    <td>
                      <code>string (CurrencyType)</code>
                      <br />
                      Moeda utilizada na transação de acordo com a
                      <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>. Atualmente seu valor
                      sempre será
                      <code>BRL</code>
                    </td>
                  </tr>
                  <tr>
                    <th>amount</th>
                    <td>
                      <code>integer (int64)</code>
                      <br />
                      Valor da ordem em centavos por exemplo
                      <code>R$ 19,77</code> deve ser expressado como
                      <code>1977</code> centavos
                    </td>
                  </tr>
                  <tr>
                    <th>attributes</th>
                    <td>
                      <code>object</code>
                      <br />
                      Atributos desta transação
                    </td>
                  </tr>
                  <tr>
                    <th>qrCodeLink</th>
                    <td>
                      <code>string</code>
                      <br />
                      Link para o QRCode
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header bg-ame-danger text-danger" id="heading400Cancel" data-toggle="collapse"
          data-target="#collapse400Cancel" aria-expanded="true" aria-controls="collapse400Cancel">
          <b>400</b> Parâmetros da requisição inválidos
        </div>
        <div id="collapse400Cancel" class="collapse show" aria-labelledby="heading400Cancel">
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
        <div class="card-header bg-ame-danger text-danger" id="heading401Cancel" data-toggle="collapse"
          data-target="#collapse401Cancel" aria-expanded="true" aria-controls="collapse401Cancel">
          <b>401</b> Não autorizado, acesso negado.
        </div>
        <div id="collapse401Cancel" class="collapse show" aria-labelledby="heading401Cancel">
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
        <div class="card-header bg-ame-danger text-danger" id="heading403Cancel" data-toggle="collapse"
          data-target="#collapse403Cancel" aria-expanded="true" aria-controls="collapse403Cancel">
          <b>403</b> Você não tem permissão para realizar esta
          operação.
        </div>
        <div id="collapse403Cancel" class="collapse show" aria-labelledby="heading403Cancel">
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
        <div class="card-header bg-ame-danger text-danger" id="heading405Cancel" data-toggle="collapse"
          data-target="#collapse405Cancel" aria-expanded="true" aria-controls="collapse405Cancel">
          <b>405</b> O verbo utilizado para requisição não é
          suportado.
        </div>
        <div id="collapse405Cancel" class="collapse show" aria-labelledby="heading405Cancel">
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
        <div class="card-header bg-ame-danger text-danger" id="heading500Cancel" data-toggle="collapse"
          data-target="#collapse500Cancel" aria-expanded="true" aria-controls="collapse500Cancel">
          <b>5XX</b> Ocorreu um erro interno, tente novamente mais
          tarde. Se o problema persistir entre em contato com o
          suporte técnico.
        </div>
        <div id="collapse500Cancel" class="collapse show" aria-labelledby="heading500Cancel">
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
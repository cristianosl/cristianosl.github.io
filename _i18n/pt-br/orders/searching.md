
  <section id="consultandoOrdem">
    <h2>Consultando uma ordem</h2>
    <br />
    <p>
      Consulta ordem por ID
    </p>
    <br />
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="table-active text-center bg-light" colspan="2">
              <span class="badge badge-success">GET</span>
              https://api.hml.amedigital.com/api/orders/{typeOrId}
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
              typeOrId
              <br />
              <code>required</code>
            </th>
            <td>
              <code>string (uuid)</code>
              <br />
              Exemplo:
              <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code>
              <br />
              ID da ordem
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
        <div class="card-header bg-ame-success text-success" id="heading200Get" data-toggle="collapse"
          data-target="#collapse200Get" aria-expanded="true" aria-controls="collapse200Get">
          <b>200</b> Ordem encontrada
        </div>
        <div id="collapse200Get" class="collapse show" aria-labelledby="heading200Get">
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
        <div class="card-header bg-ame-danger text-danger" id="heading400Get" data-toggle="collapse"
          data-target="#collapse400Get" aria-expanded="true" aria-controls="collapse400Get">
          <b>400</b> Parâmetros da requisição inválidos
        </div>
        <div id="collapse400Get" class="collapse show" aria-labelledby="heading400Get">
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
        <div class="card-header bg-ame-danger text-danger" id="heading401Get" data-toggle="collapse"
          data-target="#collapse401Get" aria-expanded="true" aria-controls="collapse401Get">
          <b>401</b> Não autorizado, acesso negado.
        </div>
        <div id="collapse401Get" class="collapse show" aria-labelledby="heading401Get">
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
        <div class="card-header bg-ame-danger text-danger" id="heading403Get" data-toggle="collapse"
          data-target="#collapse403Get" aria-expanded="true" aria-controls="collapse403Get">
          <b>403</b> Você não tem permissão para realizar esta
          operação.
        </div>
        <div id="collapse403Get" class="collapse show" aria-labelledby="heading403Get">
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
        <div class="card-header bg-ame-danger text-danger" id="heading405Get" data-toggle="collapse"
          data-target="#collapse405Get" aria-expanded="true" aria-controls="collapse405Get">
          <b>405</b> O verbo utilizado para requisição não é
          suportado.
        </div>
        <div id="collapse405Get" class="collapse show" aria-labelledby="heading405Get">
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
        <div class="card-header bg-ame-danger text-danger" id="heading500Get" data-toggle="collapse"
          data-target="#collapse500Get" aria-expanded="true" aria-controls="collapse500Get">
          <b>5XX</b> Ocorreu um erro interno, tente novamente mais
          tarde. Se o problema persistir entre em contato com o
          suporte técnico.
        </div>
        <div id="collapse500Get" class="collapse show" aria-labelledby="heading500Get">
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
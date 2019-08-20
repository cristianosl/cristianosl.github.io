<section id="criandoOrdem">
  <h2>Criando uma ordem</h2>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/orders
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
            REQUEST BODY SCHEMA:
            <code>application/json</code>
          </th>
        </tr>
        <tr>
          <th>
            title
            <br />
            <code>optional</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Título da ordem, seu valor é de utilização livre.
          </td>
        </tr>
        <tr>
          <th>
            description
            <br />
            <code>required</code>
          </th>
          <td>
            Descrição da ordem, seu valor é de utilização livre.
          </td>
        </tr>
        <tr>
          <th>
            amount
            <br />
            <code>required</code>
          </th>
          <td>
            <code>integer (int64)</code>
            <br />
            Valor da ordem em centavos por exemplo
            <code>R$19,77</code> deve ser expressado como
            <code>1977</code> centavos.
          </td>
        </tr>
        <tr>
          <th>
            type
            <br />
            <code>optional</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Value: <code>PAYMENT</code> <br />
            Tipo da ordem que será enviada para a carteira.
          </td>
        </tr>
        <tr>
          <th>
            Attributes
            <br />
            <code>required</code>
          </th>
          <td>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>
                    cashbackAmountValue
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <code>integer (int64)</code>
                    <br />Valor do cashback a ser concedido após a
                    autorização
                  </td>
                </tr>
                <tr>
                  <th>
                    transactionChangedCallbackUrl
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <code>string </code>
                    <br />URL de Callback
                  </td>
                </tr>
                <tr>
                  <th>
                    items
                    <br />
                    <code>optional</code>
                  </th>
                  <td>
                    <code>Array of objects (item)</code>
                    <br />
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>description</th>
                          <td>
                            <code>string</code>
                            <br />Descrição do item da venda
                          </td>
                        </tr>
                        <tr>
                          <th>quantity</th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Quantidade do item
                          </td>
                        </tr>
                        <tr>
                          <th>amount</th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Por exemplo: 3294 (R$32,94)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
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
      <div class="card-header bg-ame-success text-success" id="heading200Create" data-toggle="collapse"
        data-target="#collapse200Create" aria-expanded="true" aria-controls="collapse200Create">
        <b>201</b> Ordem criada com sucesso
      </div>
      <div id="collapse200Create" class="collapse show" aria-labelledby="heading200Create">
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
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Título da ordem, seu valor é de utilização
                    livre
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição da ordem realizada, seu valor é de
                    livre utilização
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
                  <th>type</th>
                  <td>
                    <code>string</code>
                    <br />
                    Value: <code>"PAYMENT"</code> <br />
                    Tipo da ordem que será enviada para a carteira
                  </td>
                </tr>
                <tr>
                  <th>
                    Attributes
                    <br />
                    <code>required</code>
                  </th>
                  <td>
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>
                            cashbackAmountValue
                            <br />
                          </th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Valor do cashback a ser
                            concedido após a autorização
                          </td>
                        </tr>
                        <tr>
                          <th>
                            transactionChangedCallbackUrl
                            <br />
                          </th>
                          <td>
                            <code>string </code>
                            <br />URL de Callback
                          </td>
                        </tr>
                        <tr>
                          <th>
                            items
                            <br />
                          </th>
                          <td>
                            <code>Array of objects (item)</code>
                            <br />
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>description</th>
                                  <td>
                                    <code>string</code>
                                    <br />Descrição do item da
                                    venda
                                  </td>
                                </tr>
                                <tr>
                                  <th>quantity</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Quantidade do item
                                  </td>
                                </tr>
                                <tr>
                                  <th>amount</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Por exemplo: 3294
                                    (R$32,94)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th>qrCodeLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL para renderizar o QRCode
                  </td>
                </tr>
                <tr>
                  <th>deepLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL utilizada para realizar o deep link entre
                    aplicativos iOS ou Android
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Create" data-toggle="collapse"
        data-target="#collapse400Create" aria-expanded="true" aria-controls="collapse400Create">
        <b>400</b> Parâmetros da requisição inválidos
      </div>
      <div id="collapse400Create" class="collapse show" aria-labelledby="heading400Create">
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
      <div class="card-header bg-ame-danger text-danger" id="heading401Create" data-toggle="collapse"
        data-target="#collapse401Create" aria-expanded="true" aria-controls="collapse401Create">
        <b>401</b> Não autorizado, acesso negado.
      </div>
      <div id="collapse401Create" class="collapse show" aria-labelledby="heading401Create">
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
      <div class="card-header bg-ame-danger text-danger" id="heading403Create" data-toggle="collapse"
        data-target="#collapse403Create" aria-expanded="true" aria-controls="collapse403Create">
        <b>403</b> Você não tem permissão para realizar esta
        operação.
      </div>
      <div id="collapse403Create" class="collapse show" aria-labelledby="heading403Create">
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
      <div class="card-header bg-ame-danger text-danger" id="heading405Create" data-toggle="collapse"
        data-target="#collapse405Create" aria-expanded="true" aria-controls="collapse405Create">
        <b>405</b> O verbo utilizado para requisição não é
        suportado.
      </div>
      <div id="collapse405Create" class="collapse show" aria-labelledby="heading405Create">
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
      <div class="card-header bg-ame-danger text-danger" id="heading500Create" data-toggle="collapse"
        data-target="#collapse500Create" aria-expanded="true" aria-controls="collapse500Create">
        <b>5XX</b> Ocorreu um erro interno, tente novamente mais
        tarde. Se o problema persistir entre em contato com o
        suporte técnico.
      </div>
      <div id="collapse500Create" class="collapse show" aria-labelledby="heading500Create">
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
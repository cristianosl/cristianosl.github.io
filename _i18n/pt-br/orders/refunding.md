<section id="estornandoOrdem">
  <h2>Estornando uma ordem</h2>
  <br />
  <p>
    Caso uma ordem tenha sido capturada (confirma), já não é mais
    possível realizar o seu cancelamento, pois este é um processo
    disponível apenas para ordens autorizadas. No caso das
    capturas deve-se criar uma ordem de estorno para o pagamento
    realizado.
  </p>
  <p>
    Diferente do cancelamento onde o valor sempre será o igual ao
    valor total da ordem, o estorno permite realizar a devolução
    de valores parciais ao cliente, desde que respeitando o limite
    do valor da ordem.
  </p>
  <p>
    É possível criar vários estornos para uma mesma ordem. Por
    exemplo, uma ordem no valor de <code>R$ 100,00</code> é criado
    3 estornos com os respectivos valores: <code>R$ 50,00</code>,
    <code>R$ 40,00</code> e <code>R$ 10,00</code>.
  </p>
  <p>
    Lembrando que a soma dos valores de cada estorno não deve
    ultrapassar o valor total da ordem. Caso isso ocorra, será
    retornado um erro durante a criação do estorno.
  </p>
  <p>
    <code>IMPORTANTE!</code> -> O parâmetro
    <code>refundId</code> no path da requisição representa um ID
    gerado pelo PDV/lojista e deve ser único para a ordem de
    pagamento.
  </p>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-info">PUT</span>
            https://api.hml.amedigital.com/api/wallet/user/payments/{id}/refunds/{refundId}
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
        <tr>
          <th>
            refundId
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string (uuid)</code>
            <br />
            Exemplo:
            <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code>
            <br />
            ID que será associado ao estorno daquela ordem.
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">
            REQUEST BODY SCHEMA: <code>application/json</code>
          </th>
        </tr>
        <tr>
          <th>
            amount
            <br />
            <code>required</code>
          </th>
          <td>
            Denifição do valor do estorno
            <br />
            <br />
            <code>integer (int64)</code>
            <br />
            Valor da ordem em centavos por exemplo
            <code>R$ 19,77</code> deve ser expressado como
            <code>1977</code> centavos
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
      <div class="card-header bg-ame-success text-success" id="heading200Estorno" data-toggle="collapse"
        data-target="#collapse200Estorno" aria-expanded="true" aria-controls="collapse200Estorno">
        <b>200</b> Ordem estornada com sucesso
      </div>
      <div id="collapse200Estorno" class="collapse show" aria-labelledby="heading200Estorno">
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
                  <th>refundId</th>
                  <td>
                    <code>string (uuid)</code>
                    <br />
                    ID do estorno definido pelo solicitante
                  </td>
                </tr>
                <tr>
                  <th>operationId</th>
                  <td>
                    <code>string (uuid)</code>
                    <br />
                    ID do estorno gerado pela Ame
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Valor do estorno em centavos por exemplo
                    <code>R$ 19,77</code> deve ser expressado como
                    <code>1977</code> centavos
                  </td>
                </tr>
                <tr>
                  <th>status</th>
                  <td>
                    <code>string</code>
                    <br />
                    Enum: <code>"HOLD"</code>
                    <code>"DENIED"</code> <code>"REFUNDED"</code>
                    <br />
                    Status do estorno
                  </td>
                </tr>
                <tr>
                  <th>createdAt</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Data e hora da criação do estorno
                  </td>
                </tr>
                <tr>
                  <th>refundedAt</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Data e hora da efetivação do estorno
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Estorno" data-toggle="collapse"
        data-target="#collapse400Estorno" aria-expanded="true" aria-controls="collapse400Estorno">
        <b>400</b> Parâmetros da requisição inválidos
      </div>
      <div id="collapse400Estorno" class="collapse show" aria-labelledby="heading400Estorno">
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
      <div class="card-header bg-ame-danger text-danger" id="heading401Estorno" data-toggle="collapse"
        data-target="#collapse401Estorno" aria-expanded="true" aria-controls="collapse401Estorno">
        <b>401</b> Não autorizado, acesso negado.
      </div>
      <div id="collapse401Estorno" class="collapse show" aria-labelledby="heading401Estorno">
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
      <div class="card-header bg-ame-danger text-danger" id="heading403Estorno" data-toggle="collapse"
        data-target="#collapse403Estorno" aria-expanded="true" aria-controls="collapse403Estorno">
        <b>403</b> Você não tem permissão para realizar esta
        operação.
      </div>
      <div id="collapse403Estorno" class="collapse show" aria-labelledby="heading403Estorno">
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
      <div class="card-header bg-ame-danger text-danger" id="heading405Estorno" data-toggle="collapse"
        data-target="#collapse405Estorno" aria-expanded="true" aria-controls="collapse405Estorno">
        <b>405</b> O verbo utilizado para requisição não é
        suportado.
      </div>
      <div id="collapse405Estorno" class="collapse show" aria-labelledby="heading405Estorno">
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
      <div class="card-header bg-ame-danger text-danger" id="heading500Estorno" data-toggle="collapse"
        data-target="#collapse500Estorno" aria-expanded="true" aria-controls="collapse500Estorno">
        <b>5XX</b> Ocorreu um erro interno, tente novamente mais
        tarde. Se o problema persistir entre em contato com o
        suporte técnico.
      </div>
      <div id="collapse500Estorno" class="collapse show" aria-labelledby="heading500Estorno">
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

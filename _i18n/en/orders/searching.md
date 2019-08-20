
<section id="consultandoOrdem">
  <h3>Searching an order</h3>
  <br />
  <p>
    Search an order by ID
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
            <code>string</code>
            <br />
            Example: <code>Bearer Token {ACCESS_TOKEN}</code> <br />
            Access token format <code>token_type</code> +
            <code>access_token</code> (Token type always is
            <b>Bearer</b>)
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">PATH PARAMETERS</th>
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
            Example:
            <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code> <br />
            Order ID
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
        <b>200</b> Order found
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
                    Order ID
                  </td>
                </tr>
                <tr>
                  <th>ttl</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Expiration date
                  </td>
                </tr>
                <tr>
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order title
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order description
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string (OrderType)</code>
                    <br />
                    Enum: <code>"TRANSFER"</code>
                    <code>"PAYMENT"</code> <br />
                    Type of order
                  </td>
                </tr>
                <tr>
                  <th>currency</th>
                  <td>
                    <code>string (CurrencyType)</code>
                    <br />
                    Coin on model
                    <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>. <br />
                    Always is <code>BRL</code>
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Order amount in cents. For example
                    <code>R$ 19,77</code> must be expressed like
                    <code>1977</code> cents
                  </td>
                </tr>
                <tr>
                  <th>attributes</th>
                  <td>
                    <code>object</code>
                    <br />
                    Attributes of order
                  </td>
                </tr>
                <tr>
                  <th>qrCodeLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL to QRCode
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
        <b>400</b> Request parameters invalid
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
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
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
        <b>401</b> Not authorized, access denied
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
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
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
        <b>403</b> You don't have permission for this action
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
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
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
        <b>405</b> Method not allowed
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
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
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
        <b>5XX</b> Internal server error, try again. If the problem
        persists, contact technical support
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
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
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
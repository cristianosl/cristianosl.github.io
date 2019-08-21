
<section id="autorizandoOrdem">
  <h3>Authorize an order</h3>
  <br />
  <p>
    An authorization is the validation process to ensure that the
    customer is able to perform the transaction. If the customer
    have all the prerequisites, the order will be authorized and a
    provision will be made (reserve) on the customer's balance of
    the same amount. After that, the order can be captured
    (confirmed) in the capture process by the seller.
  </p>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/orders/purchase
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
          <th class="table-active" colspan="2">
            REQUEST BODY SCHEMA:
            <code>application/json</code>
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
      <div class="card-header bg-ame-success text-success" id="heading200Aut" data-toggle="collapse"
        data-target="#collapse200Aut" aria-expanded="true" aria-controls="collapse200Aut">
        <b>200</b> Order successfully authorized
      </div>
      <div id="collapse200Aut" class="collapse show" aria-labelledby="heading200Aut">
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
                    Operation ID to use to capture
                  </td>
                </tr>
                <tr>
                  <th>date</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Transaction date
                  </td>
                </tr>
                <tr>
                  <th>operationType</th>
                  <td>
                    <code>string (OperationType)</code>
                    <br />
                    Enum: <code>"CREDIT"</code>
                    <code>"DEBIT"</code> <br />Operation type
                  </td>
                </tr>
                <tr>
                  <th>name</th>
                  <td>
                    <code>string</code>
                    <br />Name of wallet's transaction
                  </td>
                </tr>
                <tr>
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Transaction title
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Transaction description
                  </td>
                </tr>
                <tr>
                  <th>status</th>
                  <td>
                    <code>string (TransactionStatus)</code>
                    <br />
                    Enum: <code>"ERROR"</code>
                    <code>"CREATED"</code> <code>"HOLD"</code>
                    <code>"DENIED"</code> <code>"AUTHORIZED"</code>
                    <code>"CANCELED"</code> <code>"REFUNDED"</code>
                    <code>"SUCCESS"</code> <br />
                    Transaction status
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string (TransactionType)</code>
                    <br />
                    Enum: <code>"AUTHORIZATION"</code>
                    <code>"REFUND"</code> <code>"HOLD"</code>
                    <code>"DENIED"</code> <code>"AUTHORIZED"</code>
                    <code>"CANCELED"</code> <code>"REFUNDED"</code>
                    <code>"SUCCESS"</code> <br />
                    Type of transaction
                  </td>
                </tr>
                <tr>
                  <th>cashType</th>
                  <td>
                    <code>string (CashType)</code>
                    <br />
                    Enum: <code>"CARD"</code> <code>"CASH"</code>
                    <code>"MULTIPLE"</code>
                    <code>"CASHBACK"</code> Payment type used
                  </td>
                </tr>
                <tr>
                  <th>currency</th>
                  <td>
                    <code>string (CurrencyType)</code>
                    <br />
                    Value: <code>"BRL"</code> Coin on model
                    <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Transaction value in cents
                  </td>
                </tr>
                <tr>
                  <th>amountRefunded</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Transaction amount refunded without decimal
                    places
                  </td>
                </tr>
                <tr>
                  <th>attributes</th>
                  <td>
                    <code>object (AttributeResponse)</code>
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>payOnce</th>
                          <td>
                            <code>boolean</code>
                            <br />
                            Boolean representing if order can be
                            paid only once
                          </td>
                        </tr>
                        <tr>
                          <th>orderId</th>
                          <td>
                            <code>string (uuid)</code>
                            <br />
                            Order reference that generated the
                            payment
                          </td>
                        </tr>
                        <tr>
                          <th>transactionChangedCallbackUrl</th>
                          <td>
                            <code>string</code>
                            <br />
                            Callback URL configured for merchant
                          </td>
                        </tr>
                        <tr>
                          <th>cashbackAmountValue</th>
                          <td>
                            <code>integer</code>
                            <br />
                            Cashback amount in cents
                          </td>
                        </tr>
                        <tr>
                          <th>cashbackAmountPercent</th>
                          <td>
                            <code>integer</code>
                            <br />
                            Percentage given in cashback
                          </td>
                        </tr>
                        <tr>
                          <th>customPayload</th>
                          <td>
                            <code>object</code>
                            <br />
                            Free attributes
                          </td>
                        </tr>
                        <tr>
                          <th>externalOrder</th>
                          <td>
                            <code>string (CashType)</code>
                            <br />Enum: <code>"CARD"</code>
                            <code>"CASH"</code>
                            <code>"MULTIPLE"</code>
                            <code>"CASHBACK"</code>
                            <br />
                            Type of payment used
                          </td>
                        </tr>
                        <tr>
                          <th>
                            items
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
                                    <br />Item description
                                  </td>
                                </tr>
                                <tr>
                                  <th>quantity</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Item quantity
                                  </td>
                                </tr>
                                <tr>
                                  <th>amount</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Item amount in cents
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <th>deliveryAddress</th>
                          <td>
                            <code>string</code>
                            <br />Delivery Address
                          </td>
                        </tr>
                        <tr>
                          <th>taxApplied</th>
                          <td>
                            <code>integer</code>
                            <br />Tax amount applied in cents
                          </td>
                        </tr>
                        <tr>
                          <th>bank</th>
                          <td>
                            <code>object (BankResponse)</code>
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>code</th>
                                  <td>
                                    <code>number</code>
                                    <br />Bank code
                                  </td>
                                </tr>
                                <tr>
                                  <th>name</th>
                                  <td>
                                    <code>string</code>
                                    <br />Bank name
                                  </td>
                                </tr>
                                <tr>
                                  <th>imglocation</th>
                                  <td>
                                    <code>string</code>
                                    <br />URL icon (PNG)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <th>agency</th>
                          <td>
                            <code>string</code>
                            <br />Agency of account
                          </td>
                        </tr>
                        <tr>
                          <th>accountNumber</th>
                          <td>
                            <code>string</code>
                            <br />Account number
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th>peer</th>
                  <td>
                    <code>object (CreateWalletResponse)</code>
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>id</th>
                          <td>
                            <code>string</code>
                            <br />Wallet ID
                          </td>
                        </tr>
                        <tr>
                          <th>ownerId</th>
                          <td>
                            <code>string</code>
                            <br />Owner ID
                          </td>
                        </tr>
                        <tr>
                          <th>name</th>
                          <td>
                            <code>string</code>
                            <br />Name of wallet
                          </td>
                        </tr>
                        <tr>
                          <th>document</th>
                          <td>
                            <code>string</code>
                            <br />Document of owner wallet
                          </td>
                        </tr>
                        <tr>
                          <th>type</th>
                          <td>
                            <code>string (WalletType)</code>
                            <br />Enum: <code>"CREDIT"</code>
                            <code>"DEBIT"</code>
                            <code>"CUSTOMER"</code> <br />
                            Type of wallet
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th>operationReference</th>
                  <td>
                    <code>string</code>
                    <br />Transaction originating from this
                    transaction
                  </td>
                </tr>
                <tr>
                  <th>references</th>
                  <td>
                    <code>Array of objects (TransactionResponse)</code>
                    <br />Transactions originating from this
                    transaction
                    <br />
                  </td>
                </tr>
                <tr>
                  <th>splits</th>
                  <td>
                    <code>Array of objects
                        (TransactionSplitResponse)</code>
                    <br />Splits of this transaction
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Aut" data-toggle="collapse"
        data-target="#collapse400Aut" aria-expanded="true" aria-controls="collapse400Aut">
        <b>400</b> Request parameters invalid
      </div>
      <div id="collapse400Aut" class="collapse show" aria-labelledby="heading400Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading401Aut" data-toggle="collapse"
        data-target="#collapse401Aut" aria-expanded="true" aria-controls="collapse401Aut">
        <b>401</b> Not authorized, access denied
      </div>
      <div id="collapse401Aut" class="collapse show" aria-labelledby="heading401Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading403Aut" data-toggle="collapse"
        data-target="#collapse403Aut" aria-expanded="true" aria-controls="collapse403Aut">
        <b>403</b> You don't have permission for this action
      </div>
      <div id="collapse403Aut" class="collapse show" aria-labelledby="heading403Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading405Aut" data-toggle="collapse"
        data-target="#collapse405Aut" aria-expanded="true" aria-controls="collapse405Aut">
        <b>405</b> Method not allowed
      </div>
      <div id="collapse405Aut" class="collapse show" aria-labelledby="heading405Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading500Aut" data-toggle="collapse"
        data-target="#collapse500Aut" aria-expanded="true" aria-controls="collapse500Aut">
        <b>5XX</b> Internal server error, try again. If the problem
        persists, contact technical support
      </div>
      <div id="collapse500Aut" class="collapse show" aria-labelledby="heading500Aut">
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
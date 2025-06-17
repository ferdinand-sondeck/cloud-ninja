const logger = require('../../src/middleware/logger');

describe('Logger Middleware', () => {
  let req, res, next, consoleLogSpy;
  
  beforeEach(() => {
    // Mock des objets req, res et next
    req = {
      method: 'GET',
      originalUrl: '/test'
    };
    
    res = {
      statusCode: 200,
      on: jest.fn((event, callback) => {
        if (event === 'finish') {
          callback();
        }
      })
    };
    
    next = jest.fn();
    
    // Espionner console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  
  afterEach(() => {
    // Restaurer console.log
    consoleLogSpy.mockRestore();
  });
  
  test('should log request details and call next', () => {
    // Appeler le middleware
    logger(req, res, next);
    
    // Vérifier que next a été appelé
    expect(next).toHaveBeenCalled();
    
    // Vérifier que res.on a été appelé avec 'finish'
    expect(res.on).toHaveBeenCalledWith('finish', expect.any(Function));
    
    // Vérifier que console.log a été appelé avec les bonnes informations
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('GET /test 200')
    );
  });
});
